import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Promotion() {
	return (
		<Alert className="flex justify-between items-center bg-neutral-900 py-2 rounded-full mx-auto">
			<div className="flex items-center">
				<MegaphoneIcon className="h-6 w-6 text-white mr-2" />
				<div>
					<AlertTitle className="text-white font-bold text-sm">
						Happy New Year holidays, friends!
					</AlertTitle>
					<AlertDescription className="text-white text-sm">
						Donate to any charity of your choice, and we will magnify your
						impact by doubling the donated amount in the form of paid API
						credits!
					</AlertDescription>
				</div>
			</div>
		</Alert>
	);
}

function MegaphoneIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m3 11 18-5v12L3 14v-3z" />
			<path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
		</svg>
	);
}
