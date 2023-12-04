"use client"
import ErrorLog from "@/components/Err"
import Loading from "@/components/Loader";
import ModelTable from "@/components/ModelTable"
import { Card } from "@/components/ui/card"
import { useFetchModelsQuery } from "@/lib/api/modelsApi";


const Models = () => {
  const { data: models = [], isLoading, isError} = useFetchModelsQuery()
  if(isLoading) return <Loading />
  if (isError) return <ErrorLog errorMessage={'Error loading models, Report this incident with console print.'} />
  

  return (
    <div 
      className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 w-full h-screen overflow-auto">
      
      <ModelTable data={models}/>
      <div className="h-full overflow-auto">
        <Card className="w-full h-full">
          <iframe src='https://api.naga.ac/v1/models' className='w-full h-full' />
        </Card>
      </div>
    </div>
  )
}
export default Models