export const apiResponse = {
  "data": [
    {
      "id": "gpt-4",
      "object": "proxy",
      "proxy_to": "gpt-4-0613"
    },
    {
      "id": "gpt-4-vision-preview",
      "object": "model",
      "owned_by": "openai",
      "limit": "default-gpt-4-vision-preview",
      "unit_costs": {
        "input": "0.0000025",
        "output": "0.0000075",
        "image": 150
      },
      "allowed_for": [
        "paid"
      ]
    },
    {
      "id": "gpt-4-1106-preview",
      "object": "model",
      "owned_by": "openai",
      "limit": "default-gpt-4-1106-preview",
      "unit_costs": {
        "input": "0.0000025",
        "output": "0.0000075"
      },
      "allowed_for": [
        "paid"
      ]
    },
    {
      "id": "gpt-4-0613",
      "object": "model",
      "owned_by": "openai",
      "limit": "default-gpt-4",
      "unit_costs": {
        "input": "0.0000075",
        "output": "0.000015"
      },
      "allowed_for": [
        "paid"
      ]
    },
    {
      "id": "gpt-3.5-turbo",
      "object": "proxy",
      "proxy_to": "gpt-3.5-turbo-0613"
    },
    {
      "id": "gpt-3.5-turbo-1106",
      "object": "model",
      "owned_by": "openai",
      "limit": "default-gpt-3.5-turbo",
      "unit_costs": {
        "input": "2.5E-7",
        "output": "5E-7"
      },
      "allowed_for": [
        "free",
        "paid"
      ]
    },
    {
      "id": "gpt-3.5-turbo-0613",
      "object": "model",
      "owned_by": "openai",
      "limit": "default-gpt-3.5-turbo",
      "unit_costs": {
        "input": "3.75E-7",
        "output": "5E-7"
      },
      "allowed_for": [
        "free",
        "paid"
      ]
    },
    {
      "id": "llama-2-70b-chat",
      "object": "model",
      "owned_by": "meta",
      "limit": "default-llama-2-70b-chat",
      "unit_costs": {
        "input": "1.166666666666666666666666667E-7",
        "output": "1.583333333333333333333333333E-7"
      },
      "allowed_for": [
        "free",
        "paid"
      ]
    },
    {
      "id": "llama-2-13b-chat",
      "object": "model",
      "owned_by": "meta",
      "limit": "default-llama-2-13b-chat",
      "unit_costs": {
        "input": "5.833333333333333333333333333E-8",
        "output": "5.833333333333333333333333333E-8"
      },
      "allowed_for": [
        "free",
        "paid"
      ]
    },
    {
      "id": "llama-2-7b-chat",
      "object": "model",
      "owned_by": "meta",
      "limit": "default-llama-2-7b-chat",
      "unit_costs": {
        "input": "3.333333333333333333333333333E-8",
        "output": "3.333333333333333333333333333E-8"
      },
      "allowed_for": [
        "free",
        "paid"
      ]
    },
    {
      "id": "code-llama-34b",
      "object": "model",
      "owned_by": "meta",
      "limit": "default-code-llama-34b",
      "unit_costs": {
        "input": "1E-7",
        "output": "1E-7"
      },
      "allowed_for": [
        "free",
        "paid"
      ]
    },
    {
      "id": "mistral-7b",
      "object": "model",
      "owned_by": "mistral",
      "limit": "default-mistral-7b",
      "unit_costs": {
        "input": "3.333333333333333333333333333E-8",
        "output": "3.333333333333333333333333333E-8"
      },
      "allowed_for": [
        "free",
        "paid"
      ]
    },
    {
      "id": "falcon-180b-chat",
      "object": "model",
      "owned_by": "falcon",
      "limit": "default-falcon-180b-chat",
      "unit_costs": {
        "input": "5.833333333333333333333333333E-8",
        "output": "5.833333333333333333333333333E-8"
      },
      "allowed_for": [
        "free",
        "paid"
      ]
    },
    {
      "id": "claude-2",
      "object": "model",
      "owned_by": "anthropic",
      "limit": "default-claude-2",
      "unit_costs": {
        "input": "0.000001102",
        "output": "0.000003268"
      },
      "allowed_for": [
        "free",
        "paid"
      ]
    },
    {
      "id": "claude-instant",
      "object": "model",
      "owned_by": "anthropic",
      "limit": "default-claude-instant",
      "unit_costs": {
        "input": "1.63E-7",
        "output": "5.51E-7"
      },
      "allowed_for": [
        "free",
        "paid"
      ]
    },
    {
      "id": "midjourney",
      "object": "model",
      "owned_by": "midjourney",
      "max_images": 4,
      "multiple_of": 4,
      "limit": "default-midjourney",
      "unit_cost": "0.008",
      "allowed_for": [
        "paid"
      ]
    },
    {
      "id": "sdxl",
      "object": "model",
      "owned_by": "stabilityai",
      "max_images": 5,
      "limit": "default-sdxl",
      "unit_cost": "0.006",
      "allowed_for": [
        "free",
        "paid"
      ]
    },
    {
      "id": "latent-consistency-model",
      "object": "model",
      "owned_by": "luosiallen",
      "max_images": 10,
      "limit": "default-latent-consistency-model",
      "unit_cost": "0.001",
      "allowed_for": [
        "free",
        "paid"
      ]
    },
    {
      "id": "kandinsky-2.2",
      "object": "model",
      "owned_by": "sberbank",
      "max_images": 10,
      "limit": "default-kandinsky-2.2",
      "unit_cost": "0.006",
      "allowed_for": [
        "free",
        "paid"
      ]
    },
    {
      "id": "kandinsky-2",
      "object": "model",
      "owned_by": "sberbank",
      "max_images": 10,
      "limit": "default-kandinsky-2",
      "unit_cost": "0.006",
      "allowed_for": [
        "free",
        "paid"
      ]
    },
    {
      "id": "dall-e",
      "object": "model",
      "owned_by": "openai",
      "max_images": 10,
      "limit": "default-dall-e",
      "unit_cost": "0.006",
      "allowed_for": [
        "free",
        "paid"
      ]
    },
    {
      "id": "stable-diffusion-2.1",
      "object": "model",
      "owned_by": "stabilityai",
      "max_images": 10,
      "limit": "default-stable-diffusion-2.1",
      "unit_cost": "0.002",
      "allowed_for": [
        "free",
        "paid"
      ]
    },
    {
      "id": "stable-diffusion-1.5",
      "object": "model",
      "owned_by": "stabilityai",
      "max_images": 10,
      "limit": "default-stable-diffusion-1.5",
      "unit_cost": "0.001",
      "allowed_for": [
        "free",
        "paid"
      ]
    },
    {
      "id": "deepfloyd-if",
      "object": "model",
      "owned_by": "deepfloyd",
      "max_images": 5,
      "limit": "default-deepfloyd-if",
      "unit_cost": "0.003",
      "allowed_for": [
        "free",
        "paid"
      ]
    },
    {
      "id": "material-diffusion",
      "object": "model",
      "owned_by": "material-diffusion",
      "max_images": 8,
      "limit": "default-material-diffusion",
      "unit_cost": "0.003",
      "allowed_for": [
        "free",
        "paid"
      ]
    },
    {
      "id": "text-embedding-ada-002",
      "object": "model",
      "owned_by": "openai",
      "limit": "default-text-embedding-ada-002",
      "unit_cost": "2.5E-8",
      "allowed_for": [
        "free",
        "paid"
      ]
    },
    {
      "id": "bge-base-en-v1.5",
      "object": "model",
      "owned_by": "baai",
      "limit": "default-bge-base-en-v1.5",
      "unit_cost": "2.5E-8",
      "allowed_for": [
        "free",
        "paid"
      ]
    },
    {
      "id": "text-moderation-stable",
      "object": "model",
      "owned_by": "openai",
      "limit": "default-moderation-api",
      "allowed_for": [
        "free",
        "paid"
      ]
    },
    {
      "id": "text-moderation-latest",
      "object": "model",
      "owned_by": "openai",
      "limit": "default-moderation-api",
      "allowed_for": [
        "free",
        "paid"
      ]
    },
    {
      "id": "whisper-1",
      "object": "model",
      "owned_by": "openai",
      "limit": "default-whisper-1",
      "unit_cost": "0.000025",
      "allowed_for": [
        "free",
        "paid"
      ]
    },
    {
      "id": "m2m100-1.2b",
      "object": "model",
      "owned_by": "meta",
      "limit": "default-m2m100-1.2b",
      "unit_cost": "0.0000125",
      "allowed_for": [
        "free",
        "paid"
      ]
    },
    {
      "id": "google-tts-1",
      "object": "model",
      "owned_by": "google",
      "limit": "default-google-tts-1",
      "unit_cost": "6.666666666666666666666666667E-7",
      "allowed_for": [
        "free",
        "paid"
      ]
    }
  ],
  "object": "list"
}