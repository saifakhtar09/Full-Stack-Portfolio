"use client"

import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable"

export default function Example() {
  return (
    <ResizablePanelGroup direction="horizontal" className="h-96 border rounded-lg">
      <ResizablePanel defaultSize={30} minSize={20}>
        <div className="flex h-full items-center justify-center bg-muted">
          Left Panel
        </div>
      </ResizablePanel>
      
      <ResizableHandle withHandle />
      
      <ResizablePanel defaultSize={70}>
        <div className="flex h-full items-center justify-center bg-accent text-accent-foreground">
          Right Panel
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
