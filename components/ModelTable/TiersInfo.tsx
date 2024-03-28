// TiersInfo.tsx
import React, { type FC } from "react";
import type { TierData } from "./ModelTable";

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
