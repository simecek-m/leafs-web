/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_AUTH_DOMAIN: string;
  readonly VITE_AUTH_CLIENT_ID: string;
  readonly VITE_AUTH_AUDIENCE: string;
  readonly VITE_BACKEND_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
