// ModelTableSkeleton.tsx
import React, { type FC } from "react";
import { Card } from "../ui/card";
import {
	Table,
	TableBody,
	TableHead,
	TableHeader,
	TableRow,
} from "../ui/table";

const ModelTableSkeleton: FC = () => {
	return (
		<Card className="h-full overflow-auto scrollbar-thin scrollbar-thumb-[#262626] scrollbar-track-transparent">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[100px]">
							<div className="h-4 bg-gray-200 rounded-md animate-pulse"></div>
						</TableHead>
						<TableHead>
							<div className="h-4 bg-gray-200 rounded-md animate-pulse"></div>
						</TableHead>
						<TableHead>
							<div className="h-4 bg-gray-200 rounded-md animate-pulse"></div>
						</TableHead>
						<TableHead>
							<div className="h-4 bg-gray-200 rounded-md animate-pulse"></div>
						</TableHead>
						<TableHead>
							<div className="h-4 bg-gray-200 rounded-md animate-pulse"></div>
						</TableHead>
						<TableHead>
							<div className="h-4 bg-gray-200 rounded-md animate-pulse"></div>
						</TableHead>
						<TableHead>
							<div className="h-4 bg-gray-200 rounded-md animate-pulse"></div>
						</TableHead>
						<TableHead>
							<div className="h-4 bg-gray-200 rounded-md animate-pulse"></div>
						</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{Array.from({ length: 5 }).map((_, index) => (
						<TableRow key={index}>
							<TableHead className="w-[100px] h-[100px]">
								<div className="h-4 bg-gray-200 rounded-md animate-pulse"></div>
							</TableHead>
							<TableHead>
								<div className="h-4 bg-gray-200 rounded-md animate-pulse"></div>
							</TableHead>
							<TableHead>
								<div className="h-4 bg-gray-200 rounded-md animate-pulse"></div>
							</TableHead>
							<TableHead>
								<div className="h-4 bg-gray-200 rounded-md animate-pulse"></div>
							</TableHead>
							<TableHead>
								<div className="h-4 bg-gray-200 rounded-md animate-pulse"></div>
							</TableHead>
							<TableHead>
								<div className="h-4 bg-gray-200 rounded-md animate-pulse"></div>
							</TableHead>
							<TableHead>
								<div className="h-4 bg-gray-200 rounded-md animate-pulse"></div>
							</TableHead>
							<TableHead>
								<div className="h-4 bg-gray-200 rounded-md animate-pulse"></div>
							</TableHead>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Card>
	);
};

export default ModelTableSkeleton;
