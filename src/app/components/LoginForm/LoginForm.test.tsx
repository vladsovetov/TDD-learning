import { renderWithProviders, screen } from 'app/utils/testUtils'

import { LoginForm } from 'app/components/LoginForm'
import userEvent from '@testing-library/user-event'

it('renders form', async () => {
  renderWithProviders(<LoginForm />)

  expect(screen.getByTestId('login-form')).toBeInTheDocument()
})

it('renders form with username, pwd and button', async () => {
  renderWithProviders(<LoginForm />)

  expect(screen.getByTestId('login-form-username')).toBeInTheDocument()
  expect(screen.getByTestId('login-form-pwd')).toBeInTheDocument()
  expect(screen.getByTestId('login-form-button')).toBeInTheDocument()
})

it('upon button click hide button and show animation', async () => {
  renderWithProviders(<LoginForm />)
  const btn = screen.getByTestId('login-form-button')

  userEvent.click(btn)

  expect(btn).not.toBeInTheDocument()
  expect(screen.getByTestId('login-form-loader')).toBeInTheDocument()
})
