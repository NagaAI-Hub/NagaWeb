"use client"
import LimitTable from "@/components/LimitTable";
import { useFetchLimitsQuery } from "@/lib/api/limitsApi";
import { Card } from '@/components/ui/card';
import Loading from "@/components/Loader";
import ErrorLog from "@/components/Err";

const LimitPage = () => {
  const { data: limits = [], isLoading, isError } = useFetchLimitsQuery();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorLog errorMessage={'Error loading limits, Report this incident with console print.'} />;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 w-full h-screen overflow-auto">
      <LimitTable data={limits} />
      <Card className="w-full h-full overflow-auto">
        <iframe title="Limits" src='https://api.naga.ac/v1/limits' className='w-full h-full' />
      </Card>
    </div>
  );
}

export default LimitPage;