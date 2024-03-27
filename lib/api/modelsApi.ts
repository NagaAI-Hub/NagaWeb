import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Endpoints } from "@/conf/cfg";
import { keepCacheFor } from "@/conf/cfg";
const textModels = [
  "gpt-4-vision-preview",
  "llama-2-70b-chat",
  "llama-2-13b-chat",
  "llama-2-7b-chat",
  "mixtral-8x7b",
  "mistral-7b",
  "gpt-4",
  "gpt-4-turbo-preview",
  "gpt-3.5-turbo",
  "claude-3-haiku-20240307",
  "claude-3-sonnet",
  "claude-3-haiku",
  "mistral-small",
  "claude-3-opus",
  "mistral-large",
  "mistral-large-2402",
  "gpt-4-0125-preview",
  "claude-2.1",
  "claude-3-opus-20240229",
  "claude-3-sonnet-20240229",
  "mistral-small-2402",
  "gpt-3.5-turbo-0125",
  "mistral-next",
  "gpt-4-1106-preview",
  "gpt-4-0613",
  "gpt-3.5-turbo-1106",
  "gpt-3.5-turbo-0613",
  "claude-instant",
  "gemini-pro",
  "gemini-pro-vision",
];
const imageModels = [
  "midjourney",
  "sdxl",
  "latent-consistency-model",
  "kandinsky-2.2",
  "kandinsky-2",
  "playground-v2.5",
  "dall-e-3",
  "kandinsky-3",
  "dall-e",
  "stable-diffusion-2.1",
  "stable-diffusion-1.5",
  "deepfloyd-if",
  "material-diffusion",
];
const audioModels = [
  "whisper-1",
  "m2m100-1.2b",
  "google-tts-1",
  "whisper-large-v3",
  "xtts-v2",
  "bark",
];
const embeddingModels = [
  "text-embedding-ada-002",
  "bge-base-en-v1.5",
  "bge-large-en-v1.5",
  "text-embedding-3-small",
  "text-embedding-3-large",
];
const moderationModels = ["text-moderation-stable", "text-moderation-latest"];

const modelTypeMap: Record<string, string> = {
  ...Object.fromEntries(textModels.map((id) => [id.toLowerCase(), "Text"])),
  ...Object.fromEntries(imageModels.map((id) => [id.toLowerCase(), "Image"])),
  ...Object.fromEntries(audioModels.map((id) => [id.toLowerCase(), "Audio"])),
  ...Object.fromEntries(
    embeddingModels.map((id) => [id.toLowerCase(), "Embedding"]),
  ),
  ...Object.fromEntries(
    moderationModels.map((id) => [id.toLowerCase(), "Moderation"]),
  ),
};

interface UnitCosts {
  per_input_token?: string;
  per_output_token?: string;
  tokens_per_input_image?: number;
  per_image?: string;
  per_token?: string;
  per_second?: string;
  per_character?: string;
}

interface Pricing extends UnitCosts {}

interface Model {
  id: string;
  object: string;
  limiter?: string;
  pricing?: Pricing;
  max_images?: number;
  multiple_of?: number;
  allowed_for?: string[];
  type: string;
}
//27.03 Caching for Query
export const modelsApi = createApi({
  reducerPath: "modelsApi",
  baseQuery: fetchBaseQuery({ baseUrl: Endpoints.NAGA_BASE_URL }),
  endpoints: (build) => ({
    getModels: build.query<Model[], void>({
      query: () => "models",
      transformResponse: (response: { data: Model[] }) => {
        return response.data
          .filter((model) => model.object === "model")
          .map((model) => ({
            ...model,
            modelType: modelTypeMap[model.id.toLowerCase()] || "Unknown",
          }));
      },
      keepUnusedDataFor: keepCacheFor , // Adjust the cache duration as needed (in seconds)
    }),
  }),
});

export const { useGetModelsQuery } = modelsApi;
