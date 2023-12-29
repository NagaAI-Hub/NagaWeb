// ModelRow.tsx
import React, { FC } from "react";
import PricingInfo from './PricingInfo';
import TiersInfo from './TiersInfo';
import { TableRow, TableCell } from "./ui/table";
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
      <TableCell>{tiersData ? <TiersInfo tierData={tiersData} tierKey={'tier-1'} /> : null}</TableCell>
      <TableCell>{tiersData ? <TiersInfo tierData={tiersData} tierKey={'tier-2'} /> : null}</TableCell>
      <TableCell>{tiersData ? <TiersInfo tierData={tiersData} tierKey={'tier-3'} /> : null}</TableCell>
    </TableRow>
  );
};

export default ModelRow;