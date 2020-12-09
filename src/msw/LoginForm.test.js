import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import { LoginForm } from './LoginForm'

describe('LoginForm', () => {
  it('should allow a user to log in', async () => {
    render(<LoginForm />)

    user.type(screen.getByLabelText(/username/i), 'Takahashi')

    user.click(screen.getByRole('button', { name: /submit/i }))

    expect(await screen.findByText('f79e82e8-c34a-4dc7-a49e-9fadc0979fda')).toBeInTheDocument()
    expect(await screen.findByText('Taka')).toBeInTheDocument()
    expect(await screen.findByText('Hashi')).toBeInTheDocument()
  })
})
