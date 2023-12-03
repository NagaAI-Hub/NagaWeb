"use client"
import ErrorLog from "@/components/Err"
import ModelTable from "@/components/ModelTable"
import { Card } from "@/components/ui/card"
import { useFetchModelsQuery } from "@/lib/api/modelsApi";
import { motion } from 'framer-motion';

const Models = () => {
  const { data: models = [], isLoading, isError} = useFetchModelsQuery()
  
  if (isError) return <ErrorLog errorMessage={'Error loading models, Report this incident with console print.'} />
  if(isLoading) return <div>Loading...</div>
  
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.5 } },
  };

  return (
    <motion.div 
      className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 w-full h-screen overflow-auto"
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      <ModelTable data={models}/>
      <div className="h-full overflow-auto">
        <Card className="w-full h-full">
          <iframe src='https://api.naga.ac/v1/models' className='w-full h-full' />
        </Card>
      </div>
    </motion.div>
  )
}
export default Models