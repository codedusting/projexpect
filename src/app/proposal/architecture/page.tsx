
import dynamic from "next/dynamic";

import  Mermaid  from "./components/mermaid-charts";
export default function ArchitecturePage() {
  const chart = `
    graph LR
      A[Start] --> B[Process 1]
      B --> C{Decision}
      C -->|Yes| D[Process 2]
      C -->|No| E[End]
  `;

  return (
<div className="h-[calc(100dvh-73px)] relative flex flex-col overflow-y-auto  bg-black text-white p-6 rounded-lg shadow-2xl ">
  <h1 className="text-center mb-8 text-3xl font-bold text-red-500 uppercase">Overview</h1>

  <div className="m-auto w-3/4 mx-auto text-center bg-black p-6 rounded-lg shadow-lg shadow-red-700 border border-red-400">
    <Mermaid chart={chart} />
  </div>
</div>

  
  
  );
}
