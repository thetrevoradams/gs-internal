import { useState, ChangeEvent } from 'react'
import { getProviders, signIn, getSession, getCsrfToken } from 'next-auth/react'

const SignIn = ({ csrfToken }) => {
  console.log('{ csrfToken }', { csrfToken })

  return (
    <>
      <form method="POST" action="/api/auth/signin/email">
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <label>
          {' '}
          Email address <input type="email" id="email" name="email" />{' '}
        </label>
        {/* <label>
        {' '}
        Username <input name="username" type="text" />{' '}
      </label>
      <label>
        {' '}
        Password <input name="password" type="password" />{' '}
      </label> */}
        <button type="submit">Sign in with Email</button>{' '}
      </form>
      <button onClick={() => signIn('cognito', { callbackUrl: '/' })}>SIGN ME IN</button>
    </>
  )
}

export default SignIn

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  }
}
