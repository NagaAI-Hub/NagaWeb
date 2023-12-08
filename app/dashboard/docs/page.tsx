import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Endpoints } from "@/conf/cfg";
import { Terminal } from "lucide-react";
const Docs = () => {
    return (
        <div>
            <div className="grid grid-cols-2">
                <div>
                <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Attention required!</AlertTitle>
      <AlertDescription>
        Those docs are evolving and are not complete yet. Be warned that they might change, vary and be incomplete.
      </AlertDescription>
    </Alert>
                    <h3 className="my-4 scroll-m-20 text-3xl font-semibold tracking-tight">
                        Understanding the Flexibility of Systems with Naga API
                    </h3>
                    <p className="text-muted-foreground">The inherent beauty of systems lies in their volatility and adaptability. They offer a remarkable degree of maneuverability and freedom, enabling changes to be made seamlessly at any point.</p>
                    <h3 className="my-4 scroll-m-20 text-2xl font-semibold tracking-tight">
                        Rapid Implementation with Naga API
                    </h3>
                    <p className="text-muted-foreground">When you engage with the Naga API, the goal is straightforward: to swiftly integrate our API into your applications or local tools. This process is designed for efficiency and ease of use.</p>
                    <h3 className="my-4 scroll-m-20 text-2xl font-semibold tracking-tight">
                        Example Use Case: Running PR Agent Locally
                    </h3>
                    <p className="text-muted-foreground">Consider the scenario where you wish to run a local instance of PR Agent. The standard documentation indicates the necessity of an OpenAI API key. While this is accurate, the structure of these systems allows for a more direct approach. You can utilize the Naga API without modifying any existing code.</p>
                    <h3 className="my-4 scroll-m-20 text-2xl font-semibold tracking-tight">
                        Leveraging Official OpenAI Packages
                    </h3>
                    <p className="text-muted-foreground">The official OpenAI packages available on PyPI utilize PATH variables such as </p>

                    <div className="my-4 bg-neutral-900 p-4 rounded-xl"><code>OPENAI_API_KEY <br /> OPENAI_BASE_URL</code>

                    </div>
                    <p className="text-muted-foreground">Similarly, this extends to projects developed using OpenAI's packages. Consider it like this: Any application that incorporates an OpenAI package can be seamlessly integrated with Naga. This flexibility is not only highly convenient but also enables the straightforward migration of existing applications that utilize OpenAI's API to Naga.</p>
                    <div className="my-4 bg-neutral-900 p-4 rounded-xl">
                        export OPENAI_API_KEY=<span className="text-rose-500">YourNagaKeyGoesHere</span><br />
                        export OPENAI_API_URL=<span className="text-rose-500">{Endpoints.NAGA_BASE_URL.slice(0,-1)}</span>
                    </div>
                    <p className="text-muted-foreground">Or alternatively if you are running NT (Windows) </p>
                    <div className="my-4 bg-neutral-900 p-4 rounded-xl">
                    $env:OPENAI_API_KEY=<span className="text-rose-500">YourNagaKeyGoesHere</span><br />
                    $env:OPENAI_API_URL=<span className="text-rose-500">{Endpoints.NAGA_BASE_URL.slice(0,-1)}</span>
                    </div>
                    <h3 className="my-4 scroll-m-20 text-2xl font-semibold tracking-tight">
                        You can also source these variables in your shell startup files
                    </h3>
                    <p className="text-muted-foreground">This will enable you to run those commands in background upon shell startup
                    </p>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
}
export default Docs