// TiersInfo.tsx
import React, { FC } from "react";
import { TierData } from './ModelTable';

interface TiersInfoProps {
  tierData: TierData;
  tierKey: string;
}

const TiersInfo: FC<TiersInfoProps> = ({ tierData, tierKey }) => {
    if (!tierData || !tierData[tierKey]) {
        return <span>Not available</span>;
      }
  return <span>{tierData[tierKey]}</span>;
};

export default TiersInfo;