"use client"
import { useCallback } from "react";
import ReactFlow, {
  Node,
  addEdge,
  Background,
  Edge,
  Connection,
  useNodesState,
  useEdgesState
} from "reactflow";


import "reactflow/dist/style.css";

const initialNodes: Node[] = [
  {
    id: "1",
    type: "input",
    data: { label: "You" },
    position: { x: 150, y: 0 }
  },
  { id: "2", data: { label: "NagaAi" }, position: { x: 150, y: 100 } },
  { id: "3", data: { label: "Playground" }, position: { x: 300, y: 200 } },
  { id: "4", data: { label: "API" }, position: { x: 0, y: 200 } },
  {
    id: "5",
    data: { label: "Your Business" },
    position: { x: 0, y: 300 }
  }
];

const initialEdges: Edge[] = [
  { id: "e1-2", source: "1", target: "2", animated: false },
  { id: "e2-3", source: "2", target: "3", animated: true },
  { id: "e2-4", source: "2", target: "4", animated: true },
  { id: "e4-5", source: "4", target: "5", animated: true }
];



const BasicFlow = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((els) => addEdge(params, els)),
    [setEdges]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
    >
      
    </ReactFlow>
  );
};

export default BasicFlow;
