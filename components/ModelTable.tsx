import { TableRow, TableBody, TableCell, Table, TableHead, TableHeader } from "./ui/table"
import { FC } from 'react';
import { Check, X } from "lucide-react";
import { Card } from "./ui/card";

interface UnitCosts {
  input?: string;
  output?: string;
  image?: number;
}

interface Model {
  id: string;
  object: string;
  owned_by?: string;
  limit?: string;
  unit_costs?: UnitCosts;
  allowed_for?: string[];
  max_images?: number;
  multiple_of?: number;
  unit_cost?: string;
  proxy_to?: string;
}

interface ModelTableProps {
  data: Model[];
}

const ModelTable: FC<ModelTableProps> = ({ data }) => {
  return (
    <Card className="h-full overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Owned By</TableHead>
              <TableHead>Limit</TableHead>
              <TableHead>Unit Costs</TableHead>
              <TableHead>Free?</TableHead>
            </TableRow>
          </TableHeader>
    <TableBody>
      {data.map((item) => {
        if (item.proxy_to) {
          return null; // skip rendering this item
        }

        return (
          <TableRow key={item.id}>
            <TableCell className="font-bold">{item.id.toUpperCase()}</TableCell>
            <TableCell>{item.owned_by ? item.owned_by.toUpperCase() : 'N/A'}</TableCell>
            <TableCell>{item.limit?.toUpperCase()}</TableCell>
            <TableCell>
              {item.unit_costs ? (
                <div className="flex flex-col">
                  <span>Input: {item.unit_costs.input ? parseFloat(item.unit_costs.input).toFixed(10) : 'N/A'}</span>
                  <span>Output: {item.unit_costs.output ? parseFloat(item.unit_costs.output).toFixed(10) : 'N/A'}</span>
                </div>
              ) : 'N/A'}
            </TableCell>
            <TableCell>
              {item.allowed_for && item.allowed_for.length > 0 ? (
                item.allowed_for.includes('free') ? <Check color="green" /> : <X color="red" />
              ) : 'N/A'}
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
    </Table>
    </Card>
  )
}

export default ModelTable;