import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'mobx-react';
import App from './App';

describe('App', () => {
  test('should render', () => {
    const stores = { mainStore: null };
    const component = render(
      <Provider {...stores}>
        <App />
      </Provider>,
    );
    const linkElement = component.getByTestId('app-component');
    expect(linkElement).toBeInTheDocument();
  });
});
