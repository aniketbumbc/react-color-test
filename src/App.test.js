import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

it('should button has correct initial color', () => {
  render(<App />);
  const btnEle = screen.getByRole('button', { name: 'Change to blue' });
  expect(btnEle).toHaveStyle({ backgroundColor: 'red' });
});

it('should turns blue when clicked', () => {
  render(<App />);
  const btnEle = screen.getByRole('button', { name: 'Change to blue' });
  fireEvent.click(btnEle);
  expect(btnEle).toHaveStyle({ backgroundColor: 'blue' });
  expect(btnEle.textContent).toBe('Change to red');
});
