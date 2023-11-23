'use client'
import React from 'react';
import { Card } from './ui/card';
import * as Icons from 'lucide-react';

type FeatureCardProps = {
  title: string;
  description: string;
  icon: keyof typeof Icons;
};
type IconProps = React.ComponentProps<'svg'> & { size?: number };

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  const IconComponent = Icons[icon] as React.FC<IconProps>;
  return (
    <Card className="border border-gray-700 p-6 text-center hover:border-blue-500 transition-colors delay-50">
      <div className="flex justify-center">
        {IconComponent ? <IconComponent size={24} className="mb-4" /> : null}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </Card>
  );
};

const SectionB: React.FC = () => {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      <FeatureCard
        icon="Fingerprint"
        title="Fingerprint free."
        description="No request history is stored—your interactions remain confidential."
      />
      <FeatureCard
        icon="Activity"
        title="As stable as it gets."
        description="Stabile and reliable API access to the latest in AI technology."
      />
      <FeatureCard
        icon="Crown"
        title="You get the toys first."
        description="Gain early access to the latest developments in AI technology and stay ahead of the competition."
      />
    </div>
  );
};

export default SectionB;
