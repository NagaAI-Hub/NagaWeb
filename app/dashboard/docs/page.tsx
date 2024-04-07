"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Endpoints } from "@/conf/cfg";
import { Terminal } from "lucide-react";
import dynamic from "next/dynamic";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Link from "next/link";
import { javascriptCodes, pythonCodes } from "./codes";

interface HighlighterComponentProps {
	children: React.ReactNode;
	language: string;
}
const SyntaxHighlighter = dynamic(
	async () => {
		const { Prism } = await import("react-syntax-highlighter");
		const { atomDark } = await import(
			"react-syntax-highlighter/dist/esm/styles/prism"
		);
		const HighlighterComponent = ({
			children,
			language,
		}: HighlighterComponentProps) => (
			/* @ts-ignore */
			<Prism language={language} style={atomDark}>
				{children}
			</Prism>
		);
		HighlighterComponent.displayName = "SyntaxHighlighter";
		return HighlighterComponent;
	},
	{ ssr: false },
);
interface CodeExampleProps {
	content: {
		[key: string]: {
			title: string;
			code: string;
		};
	};
	language: string;
}

interface ResourceLinksProps {
	links: string[];
}
const OAI_PATH_VARS = ["OPENAI_API_KEY", "OPENAI_BASE_URL"];
const R_Links = [
	"https://api.naga.ac/docs",
	"https://platform.openai.com/docs/introduction",
	"https://developer.mozilla.org/en-US/",
	"https://www.freecodecamp.org/news/python-fundamentals-for-data-science/",
];

const DocumentationAlert = () => (
	<Alert>
		<Terminal className="h-4 w-4" />
		<AlertTitle>Attention required!</AlertTitle>
		<AlertDescription>
			Those docs are evolving and are not complete yet. Be warned that they
			might change, vary and be incomplete.
		</AlertDescription>
	</Alert>
);

const DocumentationContent = () => (
	<>
		{/* Add various sections of the documentation content here */}
		<ExampleUseCase />
		<LeveragingOfficialPackages />
		{/* ... other sections ... */}
	</>
);
const ExampleUseCase = () => (
	<>
		<h3 className="my-4 scroll-m-20 text-2xl font-semibold tracking-tight">
			Example Use Case: Running PR Agent Locally
		</h3>
		<p className="text-muted-foreground">
			Consider the scenario where you wish to run a local instance of PR Agent.
			The standard documentation indicates the necessity of an OpenAI API key.
			While this is accurate, the structure of these systems allows for a more
			direct approach. You can utilize the Naga API without modifying any
			existing code.
		</p>
	</>
);
const LeveragingOfficialPackages = () => (
	<>
		<h3 className="my-4 scroll-m-20 text-2xl font-semibold tracking-tight">
			Leveraging Official OpenAI Packages
		</h3>
		<p className="text-muted-foreground">
			he official OpenAI packages available on PyPI utilize PATH variables such
			as{" "}
		</p>
		<div className="my-4 bg-neutral-900 p-4 rounded-xl">
			{OAI_PATH_VARS.map((v) => (
				<div key={v}>
					<span className="text-rose-500">{v}</span>
				</div>
			))}
		</div>
		<p className="text-muted-foreground">
			Similarly, this extends to projects developed using OpenAI&apos;s
			packages. Consider it like this: Any application that incorporates an
			OpenAI package can be seamlessly integrated with Naga. This flexibility is
			not only highly convenient but also enables the straightforward migration
			of existing applications that utilize OpenAI&apos;s API to Naga.
		</p>
		<div className="my-4 bg-neutral-900 p-4 rounded-xl overflow-hidden">
			<div className="block word-wrap break-words white-space-normal">
				export {OAI_PATH_VARS[0]}=
				<span className="text-rose-500">YourNagaKeyGoesHere</span>
				<br />
				export {OAI_PATH_VARS[1]}=
				<span className="text-rose-500">
					{Endpoints.NAGA_BASE_URL.slice(0, -1)}
				</span>
			</div>
		</div>
		<p className="text-muted-foreground">
			Or alternatively if you are running NT (Windows){" "}
		</p>
		<div className="my-4 bg-neutral-900 p-4 rounded-xl overflow-hidden">
			<div className="block word-wrap break-words white-space-normal">
				$env:{OAI_PATH_VARS[0]}=
				<span className="text-rose-500">YourNagaKeyGoesHere</span>
				<br />
				$env:{OAI_PATH_VARS[1]}=
				<span className="text-rose-500">
					{Endpoints.NAGA_BASE_URL.slice(0, -1)}
				</span>
			</div>
		</div>
		<h3 className="my-4 scroll-m-20 text-2xl font-semibold tracking-tight">
			You can also source these variables in your shell startup files
		</h3>
		Unix only!
		<div className="my-4 bg-neutral-900 p-4 rounded-xl overflow-hidden">
			<div className="block word-wrap break-words white-space-normal">
				<span className="text-rose-500">curl</span>{" "}
				https://raw.githubusercontent.com/segmentationf4u1t/NagaWeb/main/sourcemeUnix.txt{" "}
				<span className="text-rose-500">{">>"}</span> ~/.bashrc
			</div>
		</div>
		<p className="text-muted-foreground">
			This script will append the path variables to your shell startup file. You
			can then replace the values with your Naga API key and Naga API base URL.
		</p>
	</>
);

const ResourceLinks = ({ links }: ResourceLinksProps) => (
	<>
		<h3 className="my-4 scroll-m-20 text-2xl font-semibold tracking-tight">
			Example Codes & Implementations
		</h3>
		<p className="text-muted-foreground">
			On the right side of this webpage, you&apos;ll find sample code for Python
			and JavaScript. While similar in implementation, they differ in syntax,
			reflecting the architectural distinctions between the two languages. While
			not exhaustive, these examples serve as a solid starting point for using
			both OpenAI and NagaAI APIs.
		</p>
		<p className="text-muted-foreground">All of Naga Endpoints as of today:</p>
		{Object.entries(Endpoints)
			.sort(([, a], [, b]) => a.length - b.length)
			.map(([key, val]) => (
				<div key={key}>
					<Link href={val}>
						<span className="text-rose-500">{val}</span>
					</Link>
				</div>
			))}
		<p className="text-muted-foreground py-2">
			For other references, parameters, and endpoints please visit those
			resources:
		</p>
		<ul className="text-muted-foreground">
			<div className="my-4 bg-neutral-900 p-4 rounded-xl">
				{OAI_PATH_VARS.map((v) => (
					<div key={v}>
						<span className="text-rose-500">{v}</span>
					</div>
				))}
			</div>
		</ul>
	</>
);

const CodeExamplesTabs = () => (
	<Tabs defaultValue="python" className="">
		<TabsList className="grid w-full grid-cols-2">
			<TabsTrigger value="python">Python</TabsTrigger>
			<TabsTrigger value="javascript">Javascript</TabsTrigger>
		</TabsList>
		<CodeExamples content={pythonCodes} language="python" />
		<CodeExamples content={javascriptCodes} language="javascript" />
	</Tabs>
);
const CodeExamples = ({ content, language }: CodeExampleProps) => (
	<TabsContent value={language}>
		{Object.entries(content).map(([key, value]) => (
			<div key={key}>
				<h3 className="my-4 scroll-m-20 text-2xl font-semibold tracking-tight">
					{value.title}
				</h3>
				{/* @ts-ignore */}
				<SyntaxHighlighter language={language}>{value.code}</SyntaxHighlighter>
			</div>
		))}
	</TabsContent>
);
const Docs = () => (
	<div className="container mx-auto px-4 py-8">
		<DocumentationAlert />
		<h1 className="my-4 scroll-m-20 text-4xl font-extrabold tracking-tight">
			Documentation
		</h1>
		<div className="flex flex-col md:flex-row">
			<div className="mb-6 md:mb-0 md:pr-6 md:w-1/2">
				<DocumentationContent />
				<ResourceLinks links={R_Links} />
			</div>
			<div className="md:w-1/2">
				<CodeExamplesTabs />
			</div>
		</div>
	</div>
);

export default Docs;
