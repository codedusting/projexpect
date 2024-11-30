// components/Mermaid.js
"use client";
import { useEffect, useRef } from "react";
import mermaid from "mermaid";

const Mermaid = ({ chart, ...props }:any) => {
  const mermaidRef = useRef(null);

  useEffect(() => {
    if (mermaidRef.current && chart) {
      mermaid.initialize({ startOnLoad: true });
      
      mermaid.contentLoaded();
    }
  }, [chart]);

  return (
    <div ref={mermaidRef} className={"mermaid"} {...props}>
      {chart}
    </div>
  );
};

export default Mermaid;



