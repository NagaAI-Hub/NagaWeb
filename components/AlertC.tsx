import { Terminal } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export function AlertTemp() {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Cheaper than Mcdonalds.</AlertTitle>
      <AlertDescription>
      Get access to unlimited premium features, priority support, and more with our premium plan.
      </AlertDescription>
      
    </Alert>
  )
}
