import type { FC, ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface DashboardCardProps {
	title: string;
	icon: ReactNode;
	desc: string;
	desc2?: string;
}

const DashboardCard: FC<DashboardCardProps> = ({
	title,
	icon,
	desc,
	desc2,
}) => {
	return (
		<Card>
			<CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
				<CardTitle className="text-sm font-medium">{title}</CardTitle>
				{icon}
			</CardHeader>
			<CardContent>
				<div className="text-2xl font-bold">{desc}</div>
				{desc2 && (
					<p className="text-xs text-zinc-500 dark:text-zinc-400">{desc2}</p>
				)}
			</CardContent>
		</Card>
	);
};

export default DashboardCard;
