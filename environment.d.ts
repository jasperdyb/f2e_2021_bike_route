declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NUMBER_PER_PAGE: number;
      TDC_APP_ID: string;
      TDC_APP_KEY: string;
    }
  }
}
export {};
