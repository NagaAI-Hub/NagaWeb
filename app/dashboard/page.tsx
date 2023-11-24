
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import ModelTable from "@/components/ModelTable"

async function getItem() {
  // The `fetch` function is automatically memoized and the result
  // is cached
  const res = await fetch('https://api.naga.ac/v1/models')
  return res.json()
}
interface Item {
  object: string;
  // define other properties of item here
}
export default async function Dashboard() {
 const res = await getItem()
 const modelCount = res.data.filter((item: Item) => item.object === 'model').length;
  return (
    <>

<div key="1" className="flex flex-col w-full min-h-screen">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Api Response </CardTitle>
              <IconAPI className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold"> 200ms </div>
              {/* <p className="text-xs text-zinc-500 dark:text-zinc-400"> -5ms from last hour </p> */}
            </CardContent>
          </Card>
         
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          
          <div>
            <Card>
            <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Owned By</TableHead>
          <TableHead>Limit</TableHead>
          <TableHead>Unit Costs</TableHead>
          <TableHead className="text-right">Free?</TableHead>
        </TableRow>
      </TableHeader>
      <ModelTable data={res.data} object={res.object} />
      </Table>
            </Card>
          </div>
          <div>
            <Card className="w-full h-full">
              <iframe src='https://api.naga.ac/v1/models' className='w-full h-full' />
            </Card>
          </div>
        </div>
      </main>
    </div>
    </>
  )
}

function IconAPI(props) {
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
      <circle cx="7.5" cy="15.5" r="5.5" />
      <path d="m21 2-9.6 9.6" />
      <path d="m15.5 7.5 3 3L22 7l-3-3" />
    </svg>
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