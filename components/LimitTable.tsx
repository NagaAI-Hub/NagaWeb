import React, { FC } from 'react';
import { TableRow, TableBody, TableCell, TableHead, TableHeader, Table } from "./ui/table";
import { Zap } from 'lucide-react';
import { Card } from './ui/card';

type LimitItem = [number, string];

interface LimitData {
  id: string;
  object: string;
  free: LimitItem[];
  paid: LimitItem[];
}

interface ApiResponse {
  data: LimitData[];
  object: string;
}

const LimitTable: FC<ApiResponse> = ({ data }) => {
  const formatLimit = (limits: LimitItem[], isPaid: boolean = false) => {
    return (
      <>
        {limits.map((limit, index) => (
          <React.Fragment key={index}>
            {isPaid ? (
              <>
                <span className="font-bold text-rose-500">{limit[0]}</span> responses per {limit[1]}
              </>
            ) : (
              `${limit[0]} responses per ${limit[1]}`
            )}
            {index < limits.length - 1 ? ' OR ' : ''}
          </React.Fragment>
        ))}
      </>
    );
  };

  return (
    <div className="h-screen overflow-auto">
      <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Free Limit</TableHead>
            <TableHead className='flex items-center text-rose-500'>Paid Limit <Zap className='h-4 w-4 ml-2'/></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-bold">{item.id.toUpperCase()}</TableCell>
              <TableCell>{formatLimit(item.free)}</TableCell>
              <TableCell>{formatLimit(item.paid, true)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
    </div>
  );
};

export default LimitTable;
