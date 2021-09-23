import { render, screen } from '@testing-library/react';
import mainPage from './Pages/mainPage';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
