import { render, screen } from '@testing-library/react';
import Button from './Button';
import { describe, expect, test } from 'vitest';

describe('Button Component', () => {
  test('renders Button with correct text', () => {
    // Render the button component with text "Click Me"
    render(<Button>Click Me</Button>);

    const buttonElement = screen.getByText(/click me/i);

    expect(buttonElement).toBeInTheDocument();
  });

  test('renders Button with correct type and variant', () => {
    render(
      <Button type='submit' variant='secondary'>
        Submit
      </Button>
    );

    const buttonElement = screen.getByText(/submit/i);

    expect(buttonElement).toHaveAttribute('type', 'submit');

    expect(buttonElement).toHaveClass('text-[#1E2772]');
    expect(buttonElement).toHaveClass('bg-white');
  });
});
