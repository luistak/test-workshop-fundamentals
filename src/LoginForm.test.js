import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { LoginForm } from './LoginForm';

describe('LoginForm', () => {
  it('should allow a user to log in', async () => {
    render(<LoginForm />)

    user.type(screen.getByLabelText(/username/i), 'Takahashi')

    user.click(screen.getByRole('button', { name: /submit/i }))

    expect(await screen.findByText('9364ecde-6f81-4395-82a2-2c4317ea4fb6')).toBeInTheDocument()
    expect(await screen.findByText('Taka')).toBeInTheDocument()
    expect(await screen.findByText('Hashi')).toBeInTheDocument()
  })
})