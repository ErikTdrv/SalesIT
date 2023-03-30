import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import { AuthContext } from './contexts/AuthContext';

test('renders learn react link', () => {
  render(
    <Router>
        <App />
    </Router>
  );
  const linkElement = screen.getByText('All Products');
  expect(linkElement).toBeInTheDocument();
});
