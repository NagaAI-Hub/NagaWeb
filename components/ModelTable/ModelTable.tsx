// ModelTable.tsx
import React, { FC } from "react";
import {
  TableRow,
  TableBody,
  TableCell,
  Table,
  TableHead,
  TableHeader,
} from "../ui/table";
import { Card } from "../ui/card";
import ErrorLog from "../Err";
import ModelRow from "./ModelRow"; // New component for table rows
export interface Pricing {
  per_input_token?: number;
  per_output_token?: number;
  per_image?: number;
  per_token?: number;
  per_second?: number;
  per_character?: number;
}

export interface TierData {
  [key: string]: any; // Add index signature
  free?: string;
  "tier-1"?: string;
  "tier-2"?: string;
  "tier-3"?: string;
}

export interface Model {
  id: string;
  modelType: string;
  pricing: Pricing | null;
  tiersData: TierData | null;
  points_to?: string;
}

interface ModelTableProps {
  data: Model[];
}

const ModelTable: FC<ModelTableProps> = ({ data }) => {
  if (!data)
    return (
      <ErrorLog errorMessage={"Error loading models. Fetch incident..."} />
    );

  return (
    <Card className="h-full overflow-auto scrollbar-thin scrollbar-thumb-[#262626] scrollbar-track-transparent">
      <Table>
        <TableHeader>
          <TableRow>
            {/* Table header could be its own component, but kept for brevity */}
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Cost</TableHead>
            <TableHead>Free Limit</TableHead>
            <TableHead className="text-blue-500">Tier-1 Limit</TableHead>
            <TableHead className="text-purple-500">Tier-2 Limit</TableHead>
            <TableHead className="text-rose-500">Tier-3 Limit</TableHead>
            <TableHead className="text-rose-600">Tier-4 Limit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) =>
            item.points_to ? null : <ModelRow key={item.id} model={item} />,
          )}
        </TableBody>
      </Table>
    </Card>
  );
};

export default ModelTable;
