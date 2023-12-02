
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"
async function getItem() {
    // The `fetch` function is automatically memoized and the result
    // is cached
    const res = await fetch('https://api.naga.ac/v1/models', { cache: 'force-cache' })
    return res.json()
  }
  interface Item {
    object: string;
  }
const ModelCard = async () => {
    const res = await getItem()
    const modelCount = res.data.filter((item: Item) => item.object === 'model').length;
    return (
        <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Total Models Supported</CardTitle>
            <IconDatabase className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
        </CardHeader>
        <CardContent>
            <div className="text-2xl font-bold">{modelCount}</div>
            {/* <p className="text-xs text-zinc-500 dark:text-zinc-400">+5 from last month</p> */}
        </CardContent>
    </Card>
    
    )
}
function IconDatabase(props: React.SVGProps<SVGSVGElement>) {
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
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5V19A9 3 0 0 0 21 19V5" />
            <path d="M3 12A9 3 0 0 0 21 12" />
        </svg>
    )
}
export default ModelCard