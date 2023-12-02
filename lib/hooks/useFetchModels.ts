// hooks/useFetchModels.ts
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { fetchModels } from '@/lib/features/models/modelsSlice';

export const useFetchModels = () => { 
  const dispatch = useAppDispatch();
  const models = useAppSelector((state) => state.models); 
  const { status, error } = models;

  useEffect(() => {
    if (status === 'idle') { // Only fetch if status is 'idle'
      dispatch(fetchModels());
    }
  }, [status, dispatch]); // Added status to dependency array

  return { models, status, error }; // Return models data
};