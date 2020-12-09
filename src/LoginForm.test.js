import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { LoginForm } from './LoginForm';

import * as api from './api';

jest.spyOn(api, 'login');

afterEach(() => {
  api.login.mockReset();
})

afterAll(() => {
  api.login.mockRestore();
})

describe('LoginForm', () => {
  it('should allow a user to log in', async () => {
    const username = 'takahashi';
    const mockedUser = {
      id: '9364ecde-6f81-4395-82a2-2c4317ea4fb6',
      name: 'Some other name',
      lastName: 'A bit more resilient test'
    }
    api.login.mockResolvedValue(mockedUser);

    render(<LoginForm />)

    user.type(screen.getByLabelText(/username/i), username)

    user.click(screen.getByRole('button', { name: /submit/i }))

    expect(await screen.findByText(mockedUser.id)).toBeInTheDocument()
    expect(await screen.findByText(mockedUser.name)).toBeInTheDocument()
    expect(await screen.findByText(mockedUser.lastName)).toBeInTheDocument()

    expect(api.login).toHaveBeenCalledWith(username);
    expect(api.login).toHaveBeenCalledTimes(1)
  })
})