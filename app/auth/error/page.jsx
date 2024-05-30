// 'use client'
// import { useRouter } from "next/navigation"

// const errors = {
//   Signin: "Try signing with a different account.",
//   OAuthSignin: "Try signing with a different account.",
//   OAuthCallback: "Try signing with a different account.",
//   OAuthCreateAccount: "Try signing with a different account.",
//   EmailCreateAccount: "Try signing with a different account.",
//   Callback: "Try signing with a different account.",
//   OAuthAccountNotLinked:
//     "To confirm your identity, sign in with the same account you used originally.",
//   EmailSignin: "Check your email address.",
//   CredentialsSignin:
//     "Sign in failed. Check the details you provided are correct.",
//   default: "Unable to sign in.",
// }

const Error = () => {

//   const router = useRouter()

//   const { error } = router.query

//   const errorMessage = error && (errors[error] ?? errors.default)

  return (
    <div className="text-2xl text-white text-center">
      <h1>Oops! Something went wrong</h1>
      {/* <h2>{errorMessage}</h2> */}
    </div>
  )
}

export default Error