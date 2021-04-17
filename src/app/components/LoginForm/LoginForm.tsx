import { useState, FormEvent } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

interface FormData {
  username: string
  pwd: string
}

const schema = yup.object().shape({
  username: yup.string().required('username is required'),
  pwd: yup.string().required('pwd is required').length(9)
})

export const LoginForm = () => {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    setError
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  const onSubmit = handleSubmit(() => {
    setSubmitted(true)
  })

  return (
    <form data-testid="login-form" onSubmit={onSubmit}>
      <input data-testid="login-form-username" {...register('username')} />
      {errors.username?.message && (
        <span data-testid="login-form-username-error">
          {errors.username?.message}
        </span>
      )}

      <input data-testid="login-form-pwd" {...register('pwd')} />
      {errors.pwd?.message && (
        <span data-testid="login-form-pwd-error">{errors.pwd?.message}</span>
      )}

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
