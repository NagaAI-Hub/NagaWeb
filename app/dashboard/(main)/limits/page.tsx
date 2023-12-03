"use client"
import { motion } from 'framer-motion';
import LimitTable from "@/components/LimitTable"
import { useFetchLimitsQuery } from "@/lib/api/limitsApi";
import { Card } from '@/components/ui/card';
import ErrorLog from '@/components/Err';
import { useFetchLimits } from '@/lib/hooks/useFetchLimits';
import Loading from '@/components/Loader';
const LimitPage = () => { 
    const { data: limits = [], isLoading, isError} = useFetchLimitsQuery()
    if (isError) return <ErrorLog errorMessage={'Error loading models, Report this incident with console print.'} />
  if(isLoading) return <Loading />
    // Animation variants
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <motion.div 
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 w-full h-screen overflow-auto"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.5 }}
        >
            {/* @ts-ignore */}
            <LimitTable data={limits.data}/>
            <div className="h-full overflow-auto">
                <Card className="w-full h-full">
                    <iframe src='https://api.naga.ac/v1/limits' className='w-full h-full' />
                </Card>
            </div>
        </motion.div>
    )
}

export default LimitPage;