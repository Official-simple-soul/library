import FormBuilder from '../components/formbuilder/index';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { elements } from './fixtures/formBuilder';

describe('FormBuilder', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear all mocks before each test
  });

  it('renders all form elements correctly', () => {
    const mockSubmit = jest.fn();
    render(<FormBuilder elements={elements} onSubmit={mockSubmit} />);

    const firstnameInput = screen.getByPlaceholderText('Enter your first name');
    const emailInput = screen.getByPlaceholderText('Enter your email');
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    expect(firstnameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('submits form with correct data', async () => {
    const mockSubmit = jest.fn();
    render(<FormBuilder elements={elements} onSubmit={mockSubmit} />);

    await act(async () => {
      fireEvent.change(screen.getByPlaceholderText('Enter your first name'), {
        target: { value: 'John' },
      });
      fireEvent.change(screen.getByPlaceholderText('Enter your email'), {
        target: { value: 'john@example.com' },
      });
      fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
    });

    expect.objectContaining({
      firstname: 'John',
      email: 'john@example.com',
    });
  });

  it('renders form data when initial value is passed', async () => {
    const formData = {
      firstname: 'Simple_soul',
      email: 'simple@live.com',
    };
    render(<FormBuilder elements={elements} formData={formData} />);

    await act(async () => {
      const firstnameInput = screen.getByPlaceholderText(
        'Enter your first name'
      );
      const emailInput = screen.getByPlaceholderText('Enter your email');
      expect(firstnameInput.value).toBe('Simple_soul');
      expect(emailInput.value).toBe('simple@live.com');
    });
  });
});
