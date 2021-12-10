import NextAuth from 'next-auth'
import CognitoProvider from 'next-auth/providers/cognito'

export default NextAuth({
  providers: [
    // OAuth authentication provider(s)
    CognitoProvider({
      clientId: process.env.COGNITO_CLIENT_ID,
      clientSecret: process.env.COGNITO_CLIENT_SECRET,
      issuer: process.env.COGNITO_ISSUER,
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user)
      return token
    },
    session: async ({ session, token }) => {
      session.user = token.user
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  // pages: {
  // signIn: '/signin',
  // signOut: '/auth/signout',
  // error: '/auth/error',
  // verifyRequest: '/auth/verify-request',
  // },
})
