// hooks/useScreenSize.ts
import { useEffect } from 'react';
import { useAppDispatch } from '@/lib/hooks';
import { setMobile } from '@/lib/features/screenSize/screenSizeSlice';

export default function useScreenSize() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleResize = () => {
      dispatch(setMobile(window.innerWidth < 768));
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch]);
};
