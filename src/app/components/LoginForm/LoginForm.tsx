import { useState, FormEvent } from 'react'

export const LoginForm = () => {
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form data-testid="login-form" onSubmit={handleSubmit}>
      <input data-testid="login-form-username" />
      <input data-testid="login-form-pwd" />
      {submitted ? (
        <div
          data-testid="login-form-loader"
          style={{ width: 30, height: 30, backgroundColor: 'red' }}
        ></div>
      ) : (
        <button data-testid="login-form-button" type="submit">
          Submit
        </button>
      )}
    </form>
  )
}
