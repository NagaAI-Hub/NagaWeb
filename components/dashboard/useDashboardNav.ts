 //components\dashboard\useDashboardNav.ts
import { useFetchModelsQuery } from '@/lib/api/modelsApi';

export const useDashboardNav = () => {
  const { data: models = [], isLoading, isError } = useFetchModelsQuery();
  const getBadgeText = (label: string) => {
    if (isLoading) return 'Loading';
    if (!models || isError) return 'Error';
    if (label === 'Models') return models.length.toString();
    return undefined;  
  };

  return { models, getBadgeText };
};
