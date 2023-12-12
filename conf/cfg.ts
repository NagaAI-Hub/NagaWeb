export const Core = {
    // Service Name
    name: 'NagaAI',
    // Service Version
    version: '3.6.0 Xmas',
    // Service Title
    title: 'NagaAI - Your Gateway to Cutting-Edge AI Technologies',
    // Service Description
    description: `Explore the frontier of artificial intelligence with NagaAI. Offering stable and reliable API access to the latest in AI technology, NagaAI empowers developers and businesses to harness the power of cutting-edge and bleeding-edge AI solutions. Elevate your projects with next-gen AI capabilities.`,
    // Service Discord
    discord: 'https://discord.naga.ac/',

}
const BASE_URL = 'https://api.naga.ac/v1/';

export const Endpoints = {
    NAGA_BASE_URL: BASE_URL,
    NAGA_MODEL_LIST: `${BASE_URL}models`,
    NAGA_DEFAULT_LIMITS: `${BASE_URL}limits`,
    NAGA_API_DOCS: `${BASE_URL}docs`,
    NAGA_CHAT_COMPLETIONS: `${BASE_URL}chat/completions`,
    NAGA_EMBEDDINGS: `${BASE_URL}embeddings`,
    NAGA_TOKENIZER: `${BASE_URL}chat/tokenizer`,
    NAGA_IMAGE_GENERATIONS: `${BASE_URL}image/generations`,
    NAGA_TTS_GENERATIONS: `${BASE_URL}audio/tts/generation`,
    NAGA_TRANSCRIPTIONS: `${BASE_URL}audio/transcriptions`,
    NAGA_TRANSLATIONS: `${BASE_URL}audio/translations`,
    NAGA_MODERATIONS: `${BASE_URL}moderations`,
};
