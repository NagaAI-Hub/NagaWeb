"use client"
import ErrorLog from "@/components/Err";
import Loading from "@/components/Loader";
import ModelTable from "@/components/ModelTable/ModelTable";
import { useFetchLimitsQuery } from "@/lib/api/limitsApi";
import { useFetchModelsQuery } from "@/lib/api/modelsApi";

const Models = () => {
  const { data: modelsData, isLoading: isLoadingModels, isError: isErrorModels } = useFetchModelsQuery();
  const { data: limitsData, isLoading: isLoadingLimits, isError: isErrorLimits } = useFetchLimitsQuery();

  if (isLoadingModels || isLoadingLimits) {
    return <Loading />;
  }

  if (isErrorModels || isErrorLimits) {
    return <ErrorLog errorMessage='Error loading models. Please report this incident with console print.' />;
  }

  // Combine models and limits data
  const combinedData = modelsData?.map((model) => {
    const modelLimit = limitsData?.find((limit) => limit.id === model.limiter); // Note the property is 'limiter', not 'limit'
  
    if (!modelLimit) {
      
      return { ...model, tiersData: {} }; // We add an empty tiersData object to handle the case where no limits are found
    }
  
    // Here we create the tiersData object which includes tier descriptions
    const tiersData = Object.entries(modelLimit.tiers).reduce((acc, [tierName, limits]) => {
      const limitString = limits.map(([value, unit]) => `${value} ${unit}`).join(', ');
      // Now, this expands the accumulator with the new tier name and its string representation.
      return { ...acc, [tierName]: limitString };
    }, {});
  
    // Now, we return the model object with an added tiersData property to hold its corresponding limit tiers.
    return { ...model, tiersData };
  });
  
  console.log(combinedData)
  return (
    <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1 sm:grid-cols-1 w-full h-screen overflow-auto">
      {/* @ts-ignore */}
      <ModelTable data={combinedData} />
    </div>
  );
};

export default Models;