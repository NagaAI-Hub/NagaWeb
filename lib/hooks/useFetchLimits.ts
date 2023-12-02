// hooks/useFetchLimits.ts
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { fetchLimits } from '@/lib/features/limits/limitsSlice';

export const useFetchLimits = () => { 
  const dispatch = useAppDispatch();
  const limits = useAppSelector((state) => state.limits); 
  const { status, error } = limits;

  useEffect(() => {
    if (status === 'idle') { // Only fetch if status is 'idle'
      dispatch(fetchLimits());
    }
  }, [status, dispatch]); // Added status to dependency array

  return { limits, status, error }; // Return models data
};