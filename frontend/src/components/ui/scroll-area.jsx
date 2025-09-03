import { ScrollArea } from "@/components/ui/scroll-area"

export default function ExampleScrollArea() {
  return (
    <ScrollArea className="h-48 w-72 rounded-md border p-4">
      <div className="space-y-2">
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={i}
            className="rounded-md bg-muted p-2"
          >
            Item {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}
