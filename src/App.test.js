import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpaces } from './App';

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
  const checkBox = screen.getByRole('checkbox', { name: 'Disable Button' });

  fireEvent.click(checkBox);
  expect(btnEle).toBeDisabled();

  fireEvent.click(checkBox);
  expect(btnEle).toBeEnabled();
});

it('Should change button color grey when disable click', () => {
  render(<App />);

  const btnEle = screen.getByRole('button', { name: 'Change to blue' });
  const checkBox = screen.getByRole('checkbox', { name: 'Disable Button' });

  fireEvent.click(checkBox);
  expect(btnEle).toHaveStyle({ backgroundColor: 'gray' });

  fireEvent.click(checkBox);
  expect(btnEle).toHaveStyle({ backgroundColor: 'red' });
});

it('Should change button color grey when disable click to blue if it was blue', () => {
  render(<App />);

  const btnEle = screen.getByRole('button', { name: 'Change to blue' });
  const checkBox = screen.getByRole('checkbox', { name: 'Disable Button' });

  fireEvent.click(btnEle);

  fireEvent.click(checkBox);
  expect(btnEle).toHaveStyle({ backgroundColor: 'gray' });

  fireEvent.click(checkBox);
  expect(btnEle).toHaveStyle({ backgroundColor: 'blue' });
});

describe('space before cample-case', () => {
  it('Should works for no inner captial letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });

  it('Should work for one inner capital letters', () => {
    expect(replaceCamelWithSpaces('MindnightBlue')).toBe('Mindnight Blue');
  });

  it('Should work multiple capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});
