// PricingInfo.tsx
import React, { type FC } from "react";
import type { Pricing } from "./ModelTable";
import styles from "./PricingInfo.module.css";

interface PricingInfoProps {
	pricing: Pricing;
}

// Helper component or function for pricing display
const PriceDisplay: FC<{
	label: string;
	value: number;
	multiplier?: number;
}> = ({ label, value, multiplier = 1 }) => {
	const adjustedValue = value * multiplier;
	// format to truncate trailing zeros
	const formattedValue = adjustedValue.toFixed(10).replace(/\.?0+$/, "");
	return (
		<div className={styles.pricingblock}>
			{label}: {formattedValue}
		</div>
	);
};

const PricingInfo: FC<PricingInfoProps> = ({ pricing }) => {
	const displayComponents = [];

	if (pricing.per_input_token && pricing.per_output_token) {
		displayComponents.push(
			<PriceDisplay
				key="in"
				label="1K Tokens In"
				value={pricing.per_input_token}
				multiplier={1000}
			/>,
		);
		displayComponents.push(
			<PriceDisplay
				key="out"
				label="1K Tokens Out"
				value={pricing.per_output_token}
				multiplier={1000}
			/>,
		);
	}
	if (pricing.per_image) {
		displayComponents.push(
			<PriceDisplay key="image" label="Image" value={pricing.per_image} />,
		);
	}
	if (pricing.per_token) {
		displayComponents.push(
			<PriceDisplay
				key="token"
				label="1K Tokens In"
				value={pricing.per_token}
				multiplier={1000}
			/>,
		);
	}
	if (pricing.per_second) {
		displayComponents.push(
			<PriceDisplay
				key="minute"
				label="1 Minute"
				value={pricing.per_second}
				multiplier={60}
			/>,
		);
	}
	if (pricing.per_character) {
		displayComponents.push(
			<PriceDisplay
				key="character"
				label="1K Characters"
				value={pricing.per_character}
				multiplier={1000}
			/>,
		);
	}

	return displayComponents.length > 0 ? <>{displayComponents}</> : null;
};

export default PricingInfo;
