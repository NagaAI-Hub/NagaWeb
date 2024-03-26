export const pythonCodes = {
  0: {
    title: "Simple Chat Completions",
    code: `
    import os
    from openai import OpenAI
    
    client = OpenAI(
        # This is the default and can be omitted
        api_key=os.environ.get("OPENAI_API_KEY"),
    )
    
    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": "Say this is a test",
            }
        ],
        model="gpt-3.5-turbo",
    )`,
  },
  1: {
    title: "Simple Embedding Generation",
    code: `
        from openai import OpenAI
        client = OpenAI()
        
        def get_embedding(text, model="text-embedding-ada-002"):
           text = text.replace("\\n", " ")
           return client.embeddings.create(input = [text], model=model).data[0].embedding
        
        df['ada_embedding'] = df.combined.apply(lambda x: get_embedding(x, model='text-embedding-ada-002'))
        df.to_csv('output/embedded_1k_reviews.csv', index=False)`,
  },
  2: {
    title: "Simple Image Generation",
    code: `
        from openai import OpenAI
        
        client = OpenAI()
        
        response = client.images.generate(
          model="dall-e-3",
          prompt="a white siamese cat",
          size="1024x1024",
          quality="standard",
          n=1,
        )
        
        image_url = response.data[0].url`,
  },
  3: {
    title: "Simple Vision Generation",
    code: `
        from openai import OpenAI

        client = OpenAI()
        
        response = client.chat.completions.create(
          model="gpt-4-vision-preview",
          messages=[
            {
              "role": "user",
              "content": [
                {"type": "text", "text": "What’s in this image?"},
                {
                  "type": "image_url",
                  "image_url": {
                    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg",
                  },
                },
              ],
            }
          ],
          max_tokens=300,
        )
        
        print(response.choices[0])`,
  },
  4: {
    title: "Simple TTS Generation",
    code: `
        from pathlib import Path
        from openai import OpenAI

        client = OpenAI()
        
        speech_file_path = Path(__file__).parent / "speech.mp3"
        response = client.audio.speech.create(
          model="tts-1",
          voice="alloy",
          input="Today is a wonderful day to build something people love!"
        )
        
        response.stream_to_file(speech_file_path)`,
  },
};

export const javascriptCodes = {
  0: {
    title: "Simple Chat Completions",
    code: `
    import OpenAI from "openai";
    const openai = new OpenAI();
    
    async function main() {
      const completion = await openai.chat.completions.create({
        messages: [{"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": "Who won the world series in 2020?"},
            {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
            {"role": "user", "content": "Where was it played?"}],
        model: "gpt-3.5-turbo",
      });
    
      console.log(completion.choices[0]);
    }
    main();`,
  },
  1: {
    title: "Simple Image Generation",
    code: `
        import OpenAI from "openai";
        const openai = new OpenAI();

        const response = await openai.createImage({
            model: "dall-e-3",
            prompt: "a white siamese cat",
            n: 1,
            size: "1024x1024",
          });
          image_url = response.data.data[0].url;`,
  },
  2: {
    title: "Simple Vision Generation",
    code: `
        import OpenAI from "openai";
        const openai = new OpenAI();
        
        async function main() {
          const response = await openai.chat.completions.create({
            model: "gpt-4-vision-preview",
            messages: [
              {
                role: "user",
                content: [
                  { type: "text", text: "What are in these images? Is there any difference between them?" },
                  {
                    type: "image_url",
                    image_url: {
                      "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg",
                    },
                  },
                  {
                    type: "image_url",
                    image_url: {
                      "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg",
                    },
                  }
                ],
              },
            ],
          });
          console.log(response.choices[0]);
        }
        main();`,
  },
  3: {
    title: "Simple TTS Generation",
    code: `
        import fs from "fs";
        import path from "path";
        import OpenAI from "openai";
        
        const openai = new OpenAI();
        
        const speechFile = path.resolve("./speech.mp3");
        
        async function main() {
          const mp3 = await openai.audio.speech.create({
            model: "tts-1",
            voice: "alloy",
            input: "Today is a wonderful day to build something people love!",
          });
          console.log(speechFile);
          const buffer = Buffer.from(await mp3.arrayBuffer());
          await fs.promises.writeFile(speechFile, buffer);
        }
        main();`,
  },
};
