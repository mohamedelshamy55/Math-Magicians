import React from 'react';
import { render as rtlRender, screen } from '@testing-library/react/';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Navbar from '../components/Navbar';

const render = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return rtlRender(ui, { wrapper: Router });
};

test('if Navbar renders and links are working', () => {
  render(<Navbar />);
  expect(screen.getByText(/Math Magicians/i)).toBeInTheDocument();

  userEvent.click(screen.getByText(/Home/i));
  expect(screen.getByText(/Home/i)).toBeInTheDocument();

  userEvent.click(screen.getByText(/Calculator/i));
  expect(screen.getByText(/Calculator/i)).toBeInTheDocument();

  userEvent.click(screen.getByText(/Quote/i));
  expect(screen.getByText(/Quote/i)).toBeInTheDocument();
});
