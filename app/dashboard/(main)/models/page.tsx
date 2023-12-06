"use client"
import ErrorLog from "@/components/Err"
import Loading from "@/components/Loader";
import ModelTable from "@/components/ModelTable"
import { useFetchLimitsQuery } from "@/lib/api/limitsApi";
import { useFetchModelsQuery } from "@/lib/api/modelsApi";


const Models = () => {
  const { data: modelsData, isLoading: isLoadingModels, isError: isErrorModels } = useFetchModelsQuery();
  const { data: limitsData, isLoading: isLoadingLimits, isError: isErrorLimits } = useFetchLimitsQuery();

  if (isLoadingModels || isLoadingLimits) {
    return <Loading />
  }

  if (isErrorModels || isErrorLimits) {
    <ErrorLog errorMessage={'Error loading models, Report this incident with console print.'} />
  }
// Combine models and limits data
const combinedData = modelsData.map((model) => {
  const modelLimit = limitsData.find(limit => limit.id === model.limit);
  return {
    ...model,
    freeLimit: modelLimit?.free.map(([value, unit]) => `${value} ${unit}`).join(', ') || 'N/A',
    paidLimit: modelLimit?.paid.map(([value, unit]) => `${value} ${unit}`).join(', ') || 'N/A'
  };
});
  return (
    <div 
      className="grid gap-4 md:grid-cols-1 lg:grid-cols-1 sm:grid-cols-1 w-full h-screen overflow-auto">
      <ModelTable data={combinedData}/>
  
    </div>
  )
}
export default Models