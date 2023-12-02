"use client"
import LimitTable from "@/components/LimitTable"
import { useFetchLimits } from "@/lib/hooks/useFetchLimits"
const LimitPage = () => { 
    const {status, error, limits} = useFetchLimits();
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 w-full">
             {/* @ts-ignore */}
            <LimitTable data={limits.limits}/>
            </div>
    )
}
export default LimitPage