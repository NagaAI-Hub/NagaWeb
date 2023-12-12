import { TableRow, TableBody, TableCell, Table, TableHead, TableHeader } from "./ui/table"
import { FC } from 'react';
import { Check, X } from "lucide-react";
import { Card } from "./ui/card";
import ErrorLog from "./Err";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


const ModelTable: FC<any> = ({ data }) => {
  if (!data) return <ErrorLog errorMessage={'Error loading models. Fetch incident............'} />
  return (
    <Card className="h-full overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Owned By</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Unit Costs</TableHead>
            <TableHead>Free Limit</TableHead>
            <TableHead>Paid Limit</TableHead>
            <TableHead>Free?</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item: any) => {
            if (item.proxy_to) {
              return null; // skip rendering this item
            }

            return (
              <TableRow key={item.id}>
                <TableCell className="font-bold">{item.id.toUpperCase()}</TableCell>
                <TableCell>{item.owned_by ? item.owned_by.toUpperCase() : 'N/A'}</TableCell>
                <TableCell>
                {item.modelType}
                </TableCell>
                <TableCell>
                  {item.unit_costs ? (
                    <div className="flex flex-col">
                      <span>Input: {item.unit_costs.input ? parseFloat(item.unit_costs.input).toFixed(10) : 'N/A'}</span>
                      <span>Output: {item.unit_costs.output ? parseFloat(item.unit_costs.output).toFixed(10) : 'N/A'}</span>
                    </div>
                  ) : 'N/A'}
                </TableCell>
                <TableCell>
                  {item.freeLimit ? (
                    <>{item.freeLimit}</>
                  ) : 'N/A'}
                </TableCell>
                <TableCell>
                  {item.paidLimit ? (
                    item.paidLimit.split(' ').map((word: string, index: number) => (
                      // Check if the word is an integer using regex
                      /^\d+$/.test(word) ? (
                        // If it's an integer, render it in a span with a class for red color
                        <span key={index} className="text-rose-500">{word}</span>
                      ) : (
                        // Else, render the word as is
                        <span key={index}>{word}</span>
                      )
                    )).reduce((prev:any, curr:any) => [prev, ' ', curr]) // Add spaces between elements
                  ) : 'N/A'}
                </TableCell>

               
                                <TableCell>
                  {item.allowed_for && item.allowed_for.length > 0 ? (
                    item.allowed_for.includes('free') ? <Check className="text-green-500" /> : <X className="text-rose-500" />
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