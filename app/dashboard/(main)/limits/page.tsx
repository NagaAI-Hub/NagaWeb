"use client"
import LimitTable from "@/components/LimitTable";
import { useFetchLimitsQuery } from "@/lib/api/limitsApi";
import { Card } from '@/components/ui/card';
import ErrorLog from '@/components/Err';
import Loading from '@/components/Loader';


const LimitPage = () => {
    const { data: limits = [], isLoading, isError } = useFetchLimitsQuery();
    return (
        <div 
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 w-full h-screen overflow-auto">
         
            <LimitTable data={limits} />
            <div className="h-full overflow-auto">
                <Card className="w-full h-full">
                    <iframe title="Limits" src='https://api.naga.ac/v1/limits' className='w-full h-full' />
                </Card>
            </div>
        </div>
    );
}

export default LimitPage;
