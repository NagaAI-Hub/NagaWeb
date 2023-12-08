

export default function Page({ params }: { params: { slug: string } }) {
    return <div 
    className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-2 w-full h-screen overflow-auto">
        <div className="div">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Understanding the Flexibility of Systems with Naga API
        </h3>
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
      Rapid Implementation with Naga API
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground break-keep">When you engage with the Naga API, the goal is straightforward: to swiftly integrate our API into your applications or local tools. This process is designed for efficiency and ease of use.</p>
     
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight ">
      Example Use Case: Running PR Agent Locally
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground break-keep">Consider the scenario where you wish to run a local instance of <span className="after:content-['_↗']">PR Agent. </span> The standard documentation indicates the necessity of an OpenAI API key. While this is accurate, the structure of these systems allows for a more direct approach. You can utilize the Naga API without modifying any existing code.</p>
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
      Leveraging Official OpenAI Packages
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground break-keep">
        The official OpenAI packages available on PyPI utilize PATH variables such as $OPENAI_API_KEY and $OPENAI_BASE_URL. Given that our API's requests and responses are directly compatible (1-1) with those of OpenAI's endpoints, you can conveniently export these variables to execute the code.
        Here's how you can set it up:
        </p>
        <code>export OPENAI_API_KEY=YourKeyGoesHere
        
export OPENAI_API_URL=https://api.naga.ac/v1</code>
<p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground break-keep">
            while the path variables are named OPENAI, you should place your NagaKey and naga api url there. (For dummies)
            </p>
      My Post: {params.slug}</div>
      <div className="bg-black text-white font-mono max-w-lg mx-auto shadow-lg rounded w-full">
            <div className="bg-gray-800 px-5 py-2 flex items-center rounded-t">
                {/* Window controls */}
                <div className="space-x-2 flex">
                    <span className="block w-3 h-3 bg-red-500 rounded-full"></span>
                    <span className="block w-3 h-3 bg-yellow-500 rounded-full"></span>
                    <span className="block w-3 h-3 bg-green-500 rounded-full"></span>
                </div>
                {/* Terminal title */}
                <span className="ml-auto">Terminal</span>
            </div>
            <div className="p-5">
                {/* Terminal output */}
                <p></p>
                {/* More output... */}
            </div>
        </div>
    </div>
  }