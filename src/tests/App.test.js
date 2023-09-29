import { render, screen } from '@testing-library/react';
import "./setupTests";
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/TEST/i);
  expect(linkElement).toBeInTheDocument();
});
