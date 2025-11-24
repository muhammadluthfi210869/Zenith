/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_OPENROUTER_API_KEY: string;
    // add other env vars if needed
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
