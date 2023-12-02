"use client"
import ModelTable from "@/components/ModelTable"
import { Card } from "@/components/ui/card"
import { TableHeader, TableRow, TableHead } from "@/components/ui/table"
import { Table } from "@/components/ui/table"
import { useFetchModels } from "@/lib/hooks/useFetchModels"
const Models = () => {
  const {status, error, models} = useFetchModels();
  console.log(models.models)
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 w-full">
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
                <ModelTable data={models.models} object={models.models}/>
                </Table>
              </Card>
      <div>
        <Card className="w-full h-full">
          <iframe src='https://api.naga.ac/v1/models' className='w-full h-full' />
        </Card>
      </div>
    </div>

    )
}
export default Models