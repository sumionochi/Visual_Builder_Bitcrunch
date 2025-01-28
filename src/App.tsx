import type React from "react"
import { useCallback } from "react"
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  type Connection,
  type Edge,
  type Node,
} from "reactflow"
import "reactflow/dist/style.css"

import APINode from "./components/nodes/APINode"
import Sidebar from "./components/Sidebar"

const nodeTypes = {
  apiNode: APINode,
}

const initialNodes: Node[] = []
const initialEdges: Edge[] = []

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const isValidConnection = useCallback(
    (connection: Connection) => {
      const source = connection.source
      const target = connection.target

      // Check for null or undefined
      if (!source || !target) return false

      // Check for direct cycle
      if (source === target) return false

      // Check for indirect cycles
      const findPath = (currentNode: string, targetNode: string, visited: Set<string>): boolean => {
        visited.add(currentNode)

        // Find all edges where current node is the source
        const connectedEdges = edges.filter((edge) => edge.source === currentNode)

        for (const edge of connectedEdges) {
          if (edge.target === targetNode) return true

          if (!visited.has(edge.target)) {
            if (findPath(edge.target, targetNode, visited)) return true
          }
        }

        return false
      }

      return !findPath(target, source, new Set())
    },
    [edges],
  )

  // Handle edge connection with cycle prevention
  const onConnect = useCallback(
    (params: Connection) => {
      if (isValidConnection(params)) {
        setEdges((eds) => addEdge(params, eds))
      }
    },
    [isValidConnection, setEdges],
  )

  // Handle edge deletion
  const onEdgeClick = useCallback(
    (event: React.MouseEvent, edge: Edge) => {
      setEdges((eds) => eds.filter((e) => e.id !== edge.id))
    },
    [setEdges],
  )

  // Handle node deletion
  const onNodeDelete = useCallback(
    (nodeId: string) => {
      // Remove the node
      setNodes((nds) => nds.filter((node) => node.id !== nodeId))

      // Remove any edges connected to this node
      setEdges((eds) => eds.filter((edge) => edge.source !== nodeId && edge.target !== nodeId))
    },
    [setNodes, setEdges],
  )

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "move"
  }, [])

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault()

      const type = event.dataTransfer.getData("application/json")
      const data = JSON.parse(type)

      // Check if the dropped item is valid
      if (typeof type === "undefined" || !type) {
        return
      }

      const position = {
        x: event.clientX - 240,
        y: event.clientY - 40,
      }

      const newNode = {
        id: `${data.label}-${nodes.length + 1}`,
        type: data.type,
        position,
        data: {
          ...data,
          onDelete: () => onNodeDelete(`${data.label}-${nodes.length + 1}`),
        },
        dragHandle: ".drag-handle",
      }

      setNodes((nds) => nds.concat(newNode))
    },
    [nodes, setNodes, onNodeDelete],
  )

  const onDragStart = (event: React.DragEvent, node: any) => {
    event.dataTransfer.setData("application/json", JSON.stringify(node))
    event.dataTransfer.effectAllowed = "move"
  }

  return (
    <div className="flex h-screen">
      <Sidebar onDragStart={onDragStart} />
      <div className="flex-1">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onEdgeClick={onEdgeClick}
          nodeTypes={nodeTypes}
          fitView
        >
          <Controls />
          <MiniMap />
          <Background gap={12} size={1} />
        </ReactFlow>
      </div>
    </div>
  )
}

export default App