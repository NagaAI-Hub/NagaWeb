"use client";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Loading from "@/components/Loader";
import { useFetchLimitsQuery } from "@/lib/api/limitsApi";
import { useGetModelsQuery } from "@/lib/api/modelsApi";
import ModelTableSkeleton from "@/components/ModelTable/ModelTableSkeleton";
const ErrorLog = dynamic(() => import("@/components/Err"), {
  loading: () => <ModelTableSkeleton/>,
});

const ModelTable = dynamic(() => import("@/components/ModelTable/ModelTable"), {
  loading: () => <ModelTableSkeleton/>,
});

const Models = () => {
  const {
    data: modelsData,
    isLoading: isLoadingModels,
    isError: isErrorModels,
  } = useGetModelsQuery();
  const {
    data: limitsData,
    isLoading: isLoadingLimits,
    isError: isErrorLimits,
  } = useFetchLimitsQuery();

  if (isLoadingModels || isLoadingLimits) {
    return <ModelTableSkeleton/>;
  }

  if (isErrorModels || isErrorLimits) {
    return (
      <ErrorLog errorMessage="Error loading models. Please report this incident with console print." />
    );
  }

  // Combine models and limits data
  const combinedData = modelsData?.map((model) => {
    const modelLimit = limitsData?.find((limit) => limit.id === model.limiter);

    if (!modelLimit) {
      return { ...model, tiersData: {} };
    }

    const tiersData = Object.entries(modelLimit.tiers).reduce(
      (acc, [tierName, limits]) => {
        const limitString = limits
          .map(([value, unit]) => `${value} ${unit}`)
          .join(", ");
        return { ...acc, [tierName]: limitString };
      },
      {},
    );

    return { ...model, tiersData };
  });

  console.log(combinedData);

  return (
    <Suspense fallback={<Loading />}>
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1 sm:grid-cols-1 w-full h-screen overflow-auto">
        {/* @ts-ignore */}
        <ModelTable data={combinedData} />
        
      </div>
    </Suspense>
  );
};

export default Models;
