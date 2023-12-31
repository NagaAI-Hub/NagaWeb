import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Endpoints }  from '@/conf/cfg';
const textModels = ["gpt-4-vision-preview", "gpt-4-1106-preview", "gpt-4-0613", "gpt-3.5-turbo-1106", "gpt-3.5-turbo-0613", "llama-2-70b-chat", "llama-2-13b-chat", "llama-2-7b-chat", "code-llama-34b", "mistral-7b", "falcon-180b-chat", "claude-2", "claude-instant", "mixtral-8x7b", "gemini-pro", "gemini-pro-vision"];
const imageModels = ["midjourney", "sdxl", "latent-consistency-model", "kandinsky-2.2", "kandinsky-2", "kandinsky-3", "dall-e", "stable-diffusion-2.1", "stable-diffusion-1.5", "deepfloyd-if", "material-diffusion"];
const audioModels = ["whisper-1", "m2m100-1.2b", "google-tts-1"];
const embeddingModels = ["text-embedding-ada-002", "bge-base-en-v1.5", "bge-large-en-v1.5"];
const moderationModels = ["text-moderation-stable", "text-moderation-latest"];
const modelTypeMap = Object.fromEntries([
  ...textModels.map(id => [id, "Text"]),
  ...imageModels.map(id => [id, "Image"]),
  ...audioModels.map(id => [id, "Audio"]),
  ...embeddingModels.map(id => [id, "Embedding"]),
  ...moderationModels.map(id => [id, "Moderation"]),
]);

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
  proxy_to?: string;
  limiter?: string;
  pricing?: Pricing;
  max_images?: number;
  multiple_of?: number;
  allowed_for?: string[];
  // Additional fields based on the previous `Model` interface structure
  // (if required or confirmed present in the actual data)
  owned_by?: string;
  limit?: string;
  // Assuming modelType is another property that should be included based on the previous code example
  modelType?: string;
}

// The top-level response format from the API
interface ModelsApiResponse {
  data: Model[];
  object: string; // Assuming this refers to the type of the collection, e.g., 'list'
}
type ModelId = keyof typeof modelTypeMap;



// Updated `modelsApi` definition with the correct interfaces
export const modelsApi = createApi({
  reducerPath: 'modelsApi',
  baseQuery: fetchBaseQuery({ baseUrl: Endpoints.NAGA_BASE_URL }),
  endpoints: (builder) => ({
    fetchModels: builder.query<Model[], void>({
      query: () => 'models',
      transformResponse: (response: ModelsApiResponse): Model[] =>
        response.data.map((model) => ({
          ...model,
          modelType: modelTypeMap[model.id] || 'Unknown',
        })),
    }),
  }),
});

export const { useFetchModelsQuery } = modelsApi;

