const Docs = () => {
    return (
        <div>
            <div className="grid grid-cols-2">
                <div>
                    <h3 className="my-4 scroll-m-20 text-3xl font-semibold tracking-tight">
                        Understanding the Flexibility of Systems with Naga API
                    </h3>
                    <p>The inherent beauty of systems lies in their volatility and adaptability. They offer a remarkable degree of maneuverability and freedom, enabling changes to be made seamlessly at any point.</p>
                    <h3 className="my-4 scroll-m-20 text-3xl font-semibold tracking-tight">
                        Rapid Implementation with Naga API
                    </h3>
                    <p>When you engage with the Naga API, the goal is straightforward: to swiftly integrate our API into your applications or local tools. This process is designed for efficiency and ease of use.</p>
                    <h3 className="my-4 scroll-m-20 text-3xl font-semibold tracking-tight">
                        Example Use Case: Running PR Agent Locally
                    </h3>
                    <p>Consider the scenario where you wish to run a local instance of PR Agent. The standard documentation indicates the necessity of an OpenAI API key. While this is accurate, the structure of these systems allows for a more direct approach. You can utilize the Naga API without modifying any existing code.</p>
                    <h3 className="my-4 scroll-m-20 text-3xl font-semibold tracking-tight">
                    Leveraging Official OpenAI Packages
                        </h3>
                        <p>The official OpenAI packages available on PyPI utilize PATH variables such as </p>
                        
                        <div className="my-4 bg-gray-800 p-4 rounded-xl"><code>$OPENAI_API_KEY <br/> $OPENAI_BASE_URL</code>
                        </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
}
export default Docs