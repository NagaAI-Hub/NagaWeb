// ModelTable.tsx
import React, { useState, type FC } from "react";
import ErrorLog from "../Err";
import { Card } from "../ui/card";
import {
	Table,
	TableBody,
	TableHead,
	TableHeader,
	TableRow,
} from "../ui/table";
import ModelRow from "./ModelRow";

export interface Pricing {
	per_input_token?: number;
	per_output_token?: number;
	per_image?: number;
	per_token?: number;
	per_second?: number;
	per_character?: number;
}

export interface TierData {
	[key: string]: string | number | undefined;
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
	const [sortColumn, setSortColumn] = useState<keyof Model | null>(null);
	const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

	const handleSort = (column: keyof Model) => {
		if (sortColumn === column) {
			setSortDirection(sortDirection === "asc" ? "desc" : "asc");
		} else {
			setSortColumn(column);
			setSortDirection("asc");
		}
	};

	const sortedData = React.useMemo(() => {
		if (sortColumn === null) return data;

		return [...data].sort((a, b) => {
			const valueA = a[sortColumn];
			const valueB = b[sortColumn];

			if (valueA === null || valueA === undefined) return 1;
			if (valueB === null || valueB === undefined) return -1;

			if (valueA < valueB) return sortDirection === "asc" ? -1 : 1;
			if (valueA > valueB) return sortDirection === "asc" ? 1 : -1;
			return 0;
		});
	}, [data, sortColumn, sortDirection]);

	if (!data)
		return (
			<ErrorLog errorMessage={"Error loading models. Fetch incident..."} />
		);

	return (
		<Card className="h-full overflow-auto scrollbar-thin scrollbar-thumb-[#262626] scrollbar-track-transparent">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead
							className="w-[100px] cursor-pointer"
							onClick={() => handleSort("id")}
						>
							ID {sortColumn === "id" && (sortDirection === "asc" ? "▲" : "▼")}
						</TableHead>
						<TableHead
							className="cursor-pointer"
							onClick={() => handleSort("modelType")}
						>
							Type{" "}
							{sortColumn === "modelType" &&
								(sortDirection === "asc" ? "▲" : "▼")}
						</TableHead>
						<TableHead>Cost</TableHead>
						<TableHead>Free Limit</TableHead>
						<TableHead className="text-blue-500">Tier-1 Limit</TableHead>
						<TableHead className="text-purple-500">Tier-2 Limit</TableHead>
						<TableHead className="text-rose-500">Tier-3 Limit</TableHead>
						<TableHead className="text-rose-600">Tier-4 Limit</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{sortedData.map((item) =>
						item.points_to ? null : <ModelRow key={item.id} model={item} />,
					)}
				</TableBody>
			</Table>
		</Card>
	);
};

export default ModelTable;
