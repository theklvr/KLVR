/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_K2R_PROJECT_ID: string;
  readonly VITE_K2R_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
