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

  const renderExtractedValue = (value: any): React.ReactNode => {
    if (Array.isArray(value)) {
      return (
        <div className="ml-4">
          {value.map((item, index) => (
            <div key={index} className="mt-2">
              <div className="font-medium text-sm">Item {index + 1}:</div>
              {renderExtractedResult(item)}
            </div>
          ))}
        </div>
      )
    }
    if (typeof value === "object" && value !== null) {
      return renderExtractedResult(value)
    }
    return <span className="text-sm">{String(value)}</span>
  }

  const renderExtractedResult = (data: any) => {
    if (!data) return null
    return (
      <div className="space-y-2">
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className="border-l-2 border-gray-200 pl-3 py-1">
            <div className="font-medium text-sm text-gray-700 break-all">{key}:</div>
            <div className="ml-2">{renderExtractedValue(value)}</div>
          </div>
        ))}
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

