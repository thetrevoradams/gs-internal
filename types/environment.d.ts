namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    COGNITO_CLIENT_ID: string
    COGNITO_CLIENT_SECRET: string
    COGNITO_ISSUER: string
    NEXTAUTH_SECRET: string
    DATABASE_URL: string
  }
}
