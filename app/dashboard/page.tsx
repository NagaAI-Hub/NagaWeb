
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
{/* 
      <div className='p-4'>
        <div className="hidden flex-col md:flex">
          <h2 className="text-2xl font-bold tracking-tight">Service Status</h2>
          <p className="text-muted-foreground">
            Individual Endpoint Status and Availability
          </p>
          <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1 ">
           <ApiStatus apiPath={'/v1/chat/completions'} apiReturn={'Im alive'} apiStatus={false} /> 

          </div>
        </div>
      </div>
      <main className="px-4">

        <Tabs defaultValue="models">
          <TabsList className='w-1/2'>
            <TabsTrigger className='w-1/2' value="models">Models</TabsTrigger>
            <TabsTrigger className='w-1/2' value="password">Limits</TabsTrigger>
          </TabsList>
          <TabsContent value="models">
            <div className="flex space-x-4">
              <Card className="w-1/2">
                 <ModelTable apiResponse={apiResponse} /> 
              </Card>
              <Card className="w-1/2">
                <iframe src='https://api.naga.ac/v1/models' className='w-full h-full' />
              </Card>
            </div>
          </TabsContent>
          
        </Tabs>


      </main> */}
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
          {/* <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Active Instances</CardTitle>
              <IconActivity className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+120</div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">+15 since last hour</p>
            </CardContent>
          </Card> */}
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
      <ModelTable data={res.data} />
      </Table>
            </Card>
          </div>
          <div>
            <Card className="w-full h-full">
              <iframe src='https://api.naga.ac/v1/models' className='w-full h-full' />
            </Card>
          </div>
        </div>
        {/* <div>
          <Card>
            <CardHeader>
              <CardTitle>Status</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <div className="flex items-center">
                <Badge className="bg-green-500 h-2 w-2 rounded-full mr-2" />
                <span>All systems operational</span>
              </div>
              <div className="flex items-center">
                <Badge className="bg-yellow-500 h-2 w-2 rounded-full mr-2" />
                <span>Maintenance scheduled</span>
              </div>
            </CardContent>
          </Card>
        </div> */}
      </main>
    </div>
    </>
  )
}
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   // Fetch the data from API
//   const res = await fetch('YOUR_API_ENDPOINT');
//   const apiResponse: ApiResponse = await res.json();

//   return {
//       props: {
//           apiResponse,
//       },
//   };
// };
function IconActivity(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
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


function IconLogin(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" x2="3" y1="12" y2="12" />
    </svg>
  )
}


function IconPackage2(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}