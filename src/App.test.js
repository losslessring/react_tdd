import { render, screen } from '@testing-library/react';
import App from './App';

test('App should have the correct title', () => {
  render(<App />);
  const text = screen.getByText("Awesome counter");
  expect(text).toBeInTheDocument();
});
