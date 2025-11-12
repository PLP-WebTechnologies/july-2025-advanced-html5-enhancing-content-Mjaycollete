import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BugForm from '../components/BugForm';
import * as api from '../services/api';

jest.mock('../services/api');

test('renders form and submits', async () => {
  api.createBug.mockResolvedValue({ _id: '1', title: 'New', description: 'x' });
  const onAdded = jest.fn();

  render(<BugForm onAdded={onAdded} />);
  fireEvent.change(screen.getByPlaceholderText(/Title/i), { target: { value: 'New' } });
  fireEvent.change(screen.getByRole('textbox'), { target: { value: 'desc' } });
  fireEvent.click(screen.getByText(/Report Bug/i));

  await waitFor(() => expect(onAdded).toHaveBeenCalled());
});
