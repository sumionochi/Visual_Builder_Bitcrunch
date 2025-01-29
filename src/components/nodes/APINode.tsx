import React, { memo, useState } from "react"
import { Handle, Position } from "reactflow"
import { ChevronDown, ChevronUp, Play, Trash, Code, AlignLeft, ExternalLink } from "lucide-react"
import { Button } from "../ui/button"
import { executeNode } from "@/lib/api"
import type { NodeData } from "@/types/nodes"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { ScrollArea } from "../ui/scroll-area"

interface APINodeProps {
  data: NodeData
  id: string
}

const APINode = memo(({ data }: APINodeProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showRawJson, setShowRawJson] = useState(false)

  const initialParams = React.useMemo(() => {
    return Object.fromEntries(
      Object.entries(data.params).map(([key, param]) => [
        key,
        param.default !== undefined ? String(param.default) : "",
      ]),
    )
  }, [data.params])

  const [params, setParams] = useState<Record<string, any>>(initialParams)

  const handleParamChange = (key: string, value: string) => {
    setParams((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const executeAPI = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const result = await executeNode(data.endpoint, data.method, params)
      setResult(result)
    } catch (err: any) {
      setError(err.message || "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  const renderExtractedValue = (value: OutputParamValue | any, type?: string): React.ReactNode => {
    if (Array.isArray(value)) {
      return (
        <div className="space-y-2">
          {value.map((item, index) => (
            <div key={index} className="mt-2">
              {renderExtractedResult(item)}
            </div>
          ))}
        </div>
      )
    }
  
    if (typeof value === 'object' && value !== null) {
      return renderExtractedResult(value)
    }
  
    // Handle specific types
    if (type === 'image' || type?.includes('image') || typeof value === 'string' && (value.startsWith('http') && (value.endsWith('.png') || value.endsWith('.jpg') || value.endsWith('.jpeg') || value.endsWith('.gif') || value.endsWith('.svg')))) {
      let cleanImageUrl = value;
      if (typeof value === 'string') {
        if (value.includes('.png') || value.includes('.svg')) {
          const pngIndex = value.indexOf('.png');
          const svgIndex = value.indexOf('.svg');
          if (pngIndex !== -1) {
            cleanImageUrl = value.substring(0, pngIndex + 4);
          } else if (svgIndex !== -1) {
            cleanImageUrl = value.substring(0, svgIndex + 4);
          }
        }
      }
      return (
        <img 
          src={cleanImageUrl} 
          alt="Result image" 
          className="max-w-[200px] h-auto rounded-md shadow-sm"
          onError={(e) => e.currentTarget.style.display = 'none'}
        />
      )
    }
  
    if (type === 'url' || (typeof value === 'string' && value.startsWith('http'))) {
      return (
        <a 
          href={value} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600 underline break-all"
        >
          {value}
        </a>
      )
    }
  
    if (type === 'boolean') {
      return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${value ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {value ? 'Yes' : 'No'}
        </span>
      )
    }
  
    if (type === 'number' || typeof value === 'number') {
      return <span className="font-mono">{value.toLocaleString()}</span>
    }
  
    return <span className="text-sm break-all">{String(value)}</span>
  }

  interface OutputParamValue {
    type?: string;
    value: any;
    items?: Record<string, OutputParamValue>;
  }

  interface OutputParams {
    output_params?: {
      data: {
        items: Record<string, OutputParamValue>;
      };
    };
    items?: Record<string, OutputParamValue>;
  }

  const renderExtractedResult = (data: OutputParams | Record<string, any> | any) => {
    if (!data) return null

    // Handle both direct data and nested output_params structure
    const items = data?.output_params?.data?.items || data?.items || data
    
    // If items is not an object, render it directly
    if (typeof items !== 'object' || items === null) {
      return renderExtractedValue(items)
    }

    // Filter out pagination object
    const filteredItems = typeof items === 'object' ? 
      Object.fromEntries(
        Object.entries(items).filter(([key]) => key !== 'pagination')
      ) : 
      items

    return (
      <div className="space-y-2 rounded-md bg-gray-50 p-3">
        {Object.entries(filteredItems).map(([key, value]) => {
          // Skip empty or null values
          if (value === null || value === undefined) return null

          // Handle both OutputParamValue structure and direct values
          const displayValue = (value as OutputParamValue)?.value !== undefined 
            ? (value as OutputParamValue).value 
            : value
          const displayType = (value as OutputParamValue)?.type || (typeof displayValue)

          return (
            <div key={key} className="group">
              <div className="flex items-start space-x-2 hover:bg-gray-100 rounded-md p-2 transition-colors">
                <div className="min-w-[150px]">
                  <span className="font-medium text-sm text-gray-700">{key}</span>
                  {displayType && (
                    <span className="ml-2 text-xs text-gray-500">{displayType}</span>
                  )}
                </div>
                <div className="flex-1">
                  {renderExtractedValue(displayValue, displayType)}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-gray-200 w-[400px]">
      <Handle type="target" position={Position.Top} className="w-3 h-3" />

      <div className="drag-handle cursor-move">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="rounded-full w-3 h-3 bg-green-500 mr-2" />
            <div className="text-lg font-bold">{data.label}</div>
          </div>
          <Button variant="ghost" size="sm" onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <ChevronUp /> : <ChevronDown />}
          </Button>
          {data.onDelete && (
            <Button variant="destructive" size="sm" onClick={data.onDelete} className="ml-2">
              <Trash className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>

      {isExpanded && (
        <div className="mt-4 space-y-4">
          <div className="text-sm text-gray-600">
            <div>Endpoint: {data.endpoint}</div>
            <div>Method: {data.method}</div>
          </div>

          <div className="space-y-2">
            <div className="font-medium">Parameters:</div>
            {Object.entries(data.params).map(([key, param]: [string, any]) => (
              <div key={key} className="flex flex-col space-y-1">
                <label className="text-sm text-gray-600">
                  {key} {param.required && <span className="text-red-500">*</span>}
                </label>
                <input
                  type="text"
                  className="border rounded px-2 py-1 text-sm"
                  placeholder={param.description}
                  value={params[key] ?? ""}
                  onChange={(e) => handleParamChange(key, e.target.value)}
                />
              </div>
            ))}
          </div>

          <Button onClick={executeAPI} disabled={isLoading} className="w-full">
            {isLoading ? (
              "Loading..."
            ) : (
              <>
                <Play className="w-4 h-4 mr-2" /> Execute
              </>
            )}
          </Button>

          {error && <div className="text-sm text-red-500 mt-2">Error: {error}</div>}

          {result && (
            <div className="mt-4">
              <div className="flex items-center justify-start mb-2 gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      View Full Result <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl max-h-[80vh]">
                    <DialogHeader>
                      <DialogTitle>API Result</DialogTitle>
                    </DialogHeader>
                    <div className="flex justify-end mb-2">
                      <Button variant="outline" size="sm" onClick={() => setShowRawJson(!showRawJson)}>
                        {showRawJson ? <AlignLeft className="w-4 h-4 mr-2" /> : <Code className="w-4 h-4 mr-2" />}
                        {showRawJson ? "Show Extracted" : "Show Raw JSON"}
                      </Button>
                    </div>
                    <ScrollArea className="h-[60vh]">
                      <div className="bg-gray-50 p-4 rounded-md">
                        {showRawJson ? (
                          <pre className="text-sm whitespace-pre-wrap font-mono">{JSON.stringify(result, null, 2)}</pre>
                        ) : (
                          renderExtractedResult(result)
                        )}
                      </div>
                    </ScrollArea>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          )}
        </div>
      )}

      <Handle type="source" position={Position.Bottom} className="w-3 h-3" />
    </div>
  )
})

APINode.displayName = "APINode"

export default APINode

