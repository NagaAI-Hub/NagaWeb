// PricingInfo.tsx
import React, { FC } from "react";
import { Pricing } from './ModelTable';

interface PricingInfoProps {
  pricing: Pricing;
}

const PricingInfo: FC<PricingInfoProps> = ({ pricing }) => {
  if (pricing.per_input_token && pricing.per_output_token) {
    return (
        <div>
        <span style={{ display: 'block' }}>1K Tokens In: {(pricing.per_input_token * 1000).toFixed(10)}</span>
        <span style={{ display: 'block' }}>1K Tokens Out: {(pricing.per_output_token * 1000).toFixed(10)}</span>
      </div>
    );
  } else if (pricing.per_image) {
    return <span> Image: {pricing.per_image}</span>;
  } else if (pricing.per_token) {
    return <span> 1K Tokens In: {(pricing.per_token * 1000).toFixed(10)}</span>;
  } else if (pricing.per_second) {
    return <span> 1 Minute: {pricing.per_second * 60}</span>;
  }
  else if (pricing.per_character) {
    return <span> 1K Characters: {pricing.per_character * 1000}</span>;
  }

  return null;
};

export default PricingInfo;