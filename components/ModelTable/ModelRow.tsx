// ModelRow.tsx
import React, { FC } from "react";
import PricingInfo from './PricingInfo';
import TiersInfo from './TiersInfo';
import { TableRow, TableCell } from "../ui/table";
import { Model } from './ModelTable';

interface ModelRowProps {
  model: Model;
}

const ModelRow: FC<ModelRowProps> = ({ model }) => {
  const { id, modelType, pricing, tiersData } = model;

  return (
    <TableRow>
      <TableCell className="font-bold">{id.toUpperCase()}</TableCell>
      <TableCell>{modelType}</TableCell>
      <TableCell>{pricing ? <PricingInfo pricing={pricing} /> : 'N/A'}</TableCell>
      <TableCell>{tiersData ? <TiersInfo tierData={tiersData} tierKey={'free'} /> : 'N/A'}</TableCell>
      <TableCell className="text-blue-500 font-bold">{tiersData ? <TiersInfo tierData={tiersData} tierKey={'tier-1'} /> : null}</TableCell>
      <TableCell className="text-purple-500 font-bold">{tiersData ? <TiersInfo tierData={tiersData} tierKey={'tier-2'} /> : null}</TableCell>
      <TableCell className="text-rose-500 font-bold">{tiersData ? <TiersInfo tierData={tiersData} tierKey={'tier-3'} /> : null}</TableCell>
      <TableCell className="text-rose-600 font-bold">{tiersData ? <TiersInfo tierData={tiersData} tierKey={'tier-4'} /> : null}</TableCell>
    </TableRow>
  );
};

export default ModelRow;