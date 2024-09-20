import { render, screen } from '@testing-library/react';
import FormInput from './FormInput';
import { describe, expect, test } from 'vitest';

describe('FormInput Component', () => {
  test('renders the FormInput component with label and placeholder', () => {
    render(
      <FormInput label='Email' name='email' placeholder='Enter your email' />
    );

    const labelElement = screen.getByText(/email/i);
    const inputElement = screen.getByPlaceholderText(/enter your email/i);

    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('name', 'email');
    expect(inputElement).toHaveAttribute('type', 'text');
  });

  test('renders the input with an icon when provided', () => {
    render(
      <FormInput
        label='Username'
        name='username'
        placeholder='Enter your username'
        icon={<span>👤</span>}
      />
    );

    const iconElement = screen.getByText(/👤/);
    const inputElement = screen.getByPlaceholderText(/enter your username/i);

    expect(iconElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('name', 'username');
    expect(inputElement).toHaveAttribute('type', 'text');
  });
});
