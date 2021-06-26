/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'mobx-react';
import ListOfSenders from './list-of-senders';

describe('ListOfSenders', () => {
  it('should render', () => {
    const stores = { mainStore: null };
    const component = render(
      <Provider {...stores}>
        <ListOfSenders />
      </Provider>,
    );

    const linkElement = component.getByTestId('list-of-senders-not-found-error-component');
    expect(linkElement).toBeInTheDocument();
  });
});
