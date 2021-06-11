import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('should render', () => {
    const component = render(<App />);
    const linkElement = component.getByTestId('app-component');
    expect(linkElement).toBeInTheDocument();
  });
});
