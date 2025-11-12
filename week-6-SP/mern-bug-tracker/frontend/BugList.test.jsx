import { render, screen } from '@testing-library/react';
import BugList from '../components/BugList';
import * as api from '../services/api';
jest.mock('../services/api');

test('shows empty list message', async () => {
  api.fetchBugs.mockResolvedValue([]);
  render(<BugList />);
  expect(await screen.findByText(/No bugs reported/i)).toBeInTheDocument();
});

test('shows error message on fetch fail', async () => {
  api.fetchBugs.mockRejectedValue(new Error('Network'));
  render(<BugList />);
  expect(await screen.findByRole('alert')).toHaveTextContent(/Network/);
});
