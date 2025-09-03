import { Progress } from "@/components/ui/progress"

export default function Example() {
  return (
    <div className="w-64 space-y-4">
      <Progress value={20} />
      <Progress value={50} />
      <Progress value={80} />
    </div>
  )
}
