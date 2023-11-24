import { TableRow, TableBody, TableCell } from "./ui/table"
import { FC } from 'react';
import { Check, X } from "lucide-react";

interface Response {
  data: DataItem[];
  object: string;
}

interface DataItem {
  id: string;
  object: string;
  owned_by?: string;
  limit?: string;
  unit_costs?: UnitCosts;
  allowed_for?: string[];
  proxy_to?: string;
  max_images?: number;
  multiple_of?: number;
  unit_cost?: string;
}

interface UnitCosts {
  input: string;
  output: string;
  image?: number;
}


const ModelTable: FC<Response> = ({ data }) => {
  return (
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
            {item.unit_costs ? 
    <div className="flex flex-col">
      <span>Input: {parseFloat(item.unit_costs.input).toFixed(10)}</span>
      <span>Output: {parseFloat(item.unit_costs.output).toFixed(10)}</span>
    </div> 
    : 'N/A'}
            </TableCell>
            <TableCell className="text-right">
              {item.allowed_for && item.allowed_for.length > 0 ? 
                (item.allowed_for.includes('free') ? <Check color="green"/> : <X color="red"/>) 
                : 'N/A'}
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  )
}

export default ModelTable;