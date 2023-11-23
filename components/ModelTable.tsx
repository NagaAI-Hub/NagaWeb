import { Table } from "lucide-react"
import { TableHeader, TableRow, TableHead, TableBody, TableCell } from "./ui/table"
import { FC } from 'react';
import { Check, X } from "lucide-react";
type ModelData = {
  id: string;
  object: string;
  owned_by: string;
  limit: string;
  unit_costs?: {
    input?: string;
    output?: string;
    image?: number;
  };
  allowed_for: string[];
};

type ModelListProps = {
  data: ModelData[];
};

const ModelTable: FC<ModelListProps> = ({ data }) => {
  return (
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.owned_by}</TableCell>
            <TableCell>{item.limit}</TableCell>
            <TableCell>
              {item.unit_costs ? `Input: ${item.unit_costs.input}, Output: ${item.unit_costs.output}` : 'N/A'}
            </TableCell>
            <TableCell className="text-right">
            {item.allowed_for && (
    item.allowed_for.includes('free') ? <Check color="green"/> : <X color="red"/>
)}

            </TableCell>
          </TableRow>
        ))}
      </TableBody>
  )
}

export default ModelTable;