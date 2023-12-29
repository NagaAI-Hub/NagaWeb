// TiersInfo.tsx
import React, { FC } from "react";
import { TierData } from './ModelTable';

interface TiersInfoProps {
  tierData: TierData;
  tierKey: string;
}

const TiersInfo: FC<TiersInfoProps> = ({ tierData, tierKey }) => {
    if (!tierData || !tierData[tierKey]) {
        return <span className="text-yellow-500 font-bold">Upgrade to Pro!</span>;
      }
  return <span>{tierData[tierKey]}</span>;
};

export default TiersInfo;