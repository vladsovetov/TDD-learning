import { renderWithProviders, screen, waitFor } from 'app/utils/testUtils'

import { LoginForm } from 'app/components/LoginForm'
import userEvent from '@testing-library/user-event'

it('renders form with username, pwd and button', async () => {
  renderWithProviders(<LoginForm />)

  expect(screen.getByTestId('login-form-username')).toBeInTheDocument()
  expect(screen.getByTestId('login-form-pwd')).toBeInTheDocument()
  expect(screen.getByTestId('login-form-button')).toBeInTheDocument()
})

it('upon empty form submission show required validation error', async () => {
  renderWithProviders(<LoginForm />)
  const btn = screen.getByTestId('login-form-button')

  userEvent.click(btn)

  await waitFor(() => {
    expect(screen.getByTestId('login-form-username-error')).toBeInTheDocument()
    expect(screen.getByTestId('login-form-pwd-error')).toBeInTheDocument()
  })
})

it('upon form submission with weak password show validation error for pwd field', async () => {
  renderWithProviders(<LoginForm />)
  const btn = screen.getByTestId('login-form-button')

  userEvent.type(screen.getByTestId('login-form-username'), 'user')
  userEvent.type(screen.getByTestId('login-form-pwd'), 'password')
  userEvent.click(btn)

  await waitFor(() => {
    expect(screen.getByTestId('login-form-pwd-error')).toBeInTheDocument()
  })
})

it('upon button click with valid form values hide button and show animation', async () => {
  renderWithProviders(<LoginForm />)
  const btn = screen.getByTestId('login-form-button')

  userEvent.type(screen.getByTestId('login-form-username'), 'user')
  userEvent.type(screen.getByTestId('login-form-pwd'), 'password8')
  userEvent.click(btn)

  await waitFor(() => {
    expect(btn).not.toBeInTheDocument()
    expect(screen.getByTestId('login-form-loader')).toBeInTheDocument()
  })
})
