import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";

// Define the TypeScript interface for the component props
interface ApiStatusProps {
  apiPath: string;
  apiStatus: boolean;
  apiReturn: string;
}

const ApiStatus: React.FC<ApiStatusProps> = ({ apiPath, apiStatus, apiReturn }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {apiPath}
        </CardTitle>
        {apiStatus ? <Check className='text-green-500' /> : <X className='text-red-500' />}
      </CardHeader>
      <CardContent>
        <div className={`text-2xl font-bold ${apiStatus ? 'text-green-500' : 'text-red-500'}`}>
          {apiStatus ? 'Operational' : 'Degradation'}
        </div>
        <p className="text-xs text-muted-foreground">
          {apiReturn}
        </p>
      </CardContent>
    </Card>
  );
};

export default ApiStatus;
