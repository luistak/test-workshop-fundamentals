import ReactDOM from 'react-dom';
import { LoginForm } from './msw/LoginForm';

// Start the mocking conditionally.
if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./msw/mocks/browser')
  worker.start()
}

ReactDOM.render(<LoginForm />, document.getElementById('root'))
