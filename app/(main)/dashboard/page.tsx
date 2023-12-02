
import { Card } from "@/components/ui/card"
import { TableHead, TableRow, TableHeader, Table } from "@/components/ui/table"
import ModelTable from "@/components/ModelTable"


async function getItem() {
  // The `fetch` function is automatically memoized and the result
  // is cached
  const res = await fetch('https://api.naga.ac/v1/models', { cache: 'force-cache' })
  return res.json()
}
interface Item {
  object: string;
}
export default async function Dashboard() {
  const res = await getItem()
  return (
    <>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1">
            <div>
              <Card>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">ID</TableHead>
                      <TableHead>Owned By</TableHead>
                      <TableHead>Limit</TableHead>
                      <TableHead>Unit Costs</TableHead>
                      <TableHead>Free?</TableHead>
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

    </>
  )
}

function IconAPI(props: React.SVGProps<SVGSVGElement>) {
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