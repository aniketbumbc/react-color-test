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

it('should check checkbox', () => {
  render(<App />);
  const btnEle = screen.getByRole('button', { name: 'Change to blue' });
  expect(btnEle).toBeEnabled();

  const checkBox = screen.getByRole('checkbox');
  expect(checkBox).not.toBeChecked();
});

it('should disable and enabled button when checkbox is check', () => {
  render(<App />);

  const btnEle = screen.getByRole('button', { name: 'Change to blue' });
  const checkBox = screen.getByRole('checkbox');

  fireEvent.click(checkBox);
  expect(btnEle).toBeDisabled();

  fireEvent.click(checkBox);
  expect(btnEle).toBeEnabled();
});
