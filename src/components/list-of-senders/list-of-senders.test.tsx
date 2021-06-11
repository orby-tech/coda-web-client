import React from 'react';
import { render } from '@testing-library/react';
import ListOfSenders from './list-of-senders';

describe('ListOfSenders', () => {
  it('should render', () => {
    const component = render(<ListOfSenders />);

    const linkElement = component.getByTestId('list-of-senders-not-found-error-component');
    expect(linkElement).toBeInTheDocument();
  });
});
