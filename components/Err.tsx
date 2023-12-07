
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"

import { useHexDump } from "@/lib/hooks/index";
interface ComponentProps {
    errorMessage: string;
  }
  
export default function ErrorLog({ errorMessage }: ComponentProps) {
    //Turn errorMessage to buffer
    
    const buffer = Buffer.from(errorMessage);
    const hexDumpString = useHexDump(buffer);
    
   
  return (
    <Card className="bg-red-50 dark:bg-red-900 text-red-700 dark:text-red-200 p-4 rounded-md shadow-md">
    <CardHeader className="flex items-center space-x-2">
      <IconAlerttriangle className="h-6 w-6" />
      <CardTitle>Error Information</CardTitle>
    </CardHeader>
    <CardContent className="mt-2 space-y-2">
    
      <code className="block p-2 bg-gray-100 dark:bg-gray-800 rounded-md text-center">
        <pre>{hexDumpString}</pre>
      </code>
    </CardContent>
    
  </Card>
  )
}

function IconAlerttriangle(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
        <path d="M12 9v4" />
        <path d="M12 17h.01" />
      </svg>
    )
  }