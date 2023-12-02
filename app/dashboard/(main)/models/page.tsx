"use client"
import ModelTable from "@/components/ModelTable"
import { Card } from "@/components/ui/card"
import { TableHeader, TableRow, TableHead } from "@/components/ui/table"
import { Table } from "@/components/ui/table"
import { useFetchModels } from "@/lib/hooks/useFetchModels"
import { motion } from 'framer-motion';

const Models = () => {
  const {status, error, models} = useFetchModels();
  if (error) return <h1>error</h1>

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
   
          {/* @ts-ignore */}
          <ModelTable data={models.models} object={models.models}/>
        
      <div className="h-full overflow-auto">
        <Card className="w-full h-full">
          <iframe src='https://api.naga.ac/v1/models' className='w-full h-full' />
        </Card>
      </div>
    </motion.div>
  )
}
export default Models