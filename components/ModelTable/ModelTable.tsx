import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
// ModelTable.tsx
import { useMemo, useState } from "react";
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

const ModelTable: React.FC<ModelTableProps> = ({ data }) => {
	const [sortColumn, setSortColumn] = useState<keyof Model | null>(null);
	const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
	const [modelTypeFilter, setModelTypeFilter] = useState<string>("");
	const [freeFilter, setFreeFilter] = useState<boolean>(false);

	const handleSort = (column: keyof Model) => {
		if (sortColumn === column) {
			setSortDirection(sortDirection === "asc" ? "desc" : "asc");
		} else {
			setSortColumn(column);
			setSortDirection("asc");
		}
	};

	const formatTiersData = (models: Model[]) => {
		return models.map((model) => {
			const { tiersData } = model;

			if (tiersData) {
				const formattedTiersData: TierData = {};
				for (const tier in tiersData) {
					const [minuteValue, dayValue] =
						tiersData[tier]?.toString().split(", ") || [];
					const formattedMinuteValue = minuteValue?.split(" ")[0];
					const formattedDayValue = dayValue?.split(" ")[0];

					formattedTiersData[tier] =
						`${formattedMinuteValue} per minute, ${formattedDayValue} per day`;
				}
				model.tiersData = formattedTiersData;
			}

			return model;
		});
	};

	const filteredData = useMemo(() => {
		return data.filter((model) => {
			if (modelTypeFilter && model.modelType !== modelTypeFilter) {
				return false;
			}
			if (freeFilter && !model.tiersData?.free) {
				return false;
			}
			return true;
		});
	}, [data, modelTypeFilter, freeFilter]);

	const sortedData = useMemo(() => {
		if (sortColumn === null) return filteredData;

		return [...filteredData].sort((a, b) => {
			const valueA = a[sortColumn];
			const valueB = b[sortColumn];

			if (valueA === null || valueA === undefined) return 1;
			if (valueB === null || valueB === undefined) return -1;

			if (valueA < valueB) return sortDirection === "asc" ? -1 : 1;
			if (valueA > valueB) return sortDirection === "asc" ? 1 : -1;
			return 0;
		});
	}, [filteredData, sortColumn, sortDirection]);

	const formattedData = useMemo(
		() => formatTiersData(sortedData),
		[sortedData, formatTiersData],
	);

	if (!data) {
		return <ErrorLog errorMessage="Error loading models. Fetch incident..." />;
	}
	return (
		<Card className="h-full overflow-auto scrollbar-thin scrollbar-thumb-[#262626] scrollbar-track-transparent">
			<div className="m-4 flex items-center space-x-4">
				<ToggleGroup
					type="single"
					value={modelTypeFilter}
					onValueChange={(value) => setModelTypeFilter(value)}
					className="flex space-x-2"
				>
					<ToggleGroupItem variant="outline" value="Text">
						Text
					</ToggleGroupItem>
					<ToggleGroupItem variant="outline" value="Image">
						Image
					</ToggleGroupItem>
					<ToggleGroupItem variant="outline" value="Embedding">
						Embedding
					</ToggleGroupItem>
					<ToggleGroupItem variant="outline" value="Moderation">
						Moderation
					</ToggleGroupItem>
					<ToggleGroupItem variant="outline" value="Audio">
						Audio
					</ToggleGroupItem>
				</ToggleGroup>
				<ToggleGroup
					type="single"
					variant="outline"
					value={freeFilter ? "free" : ""}
					onValueChange={(value) => setFreeFilter(value === "free")}
					className="flex space-x-2"
				>
					<ToggleGroupItem value="free">Free Limit</ToggleGroupItem>
				</ToggleGroup>
			</div>
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
					{formattedData.map((item) =>
						item.points_to ? null : <ModelRow key={item.id} model={item} />,
					)}
				</TableBody>
			</Table>
		</Card>
	);
};

export default ModelTable;
