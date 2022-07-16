/* eslint-disable import/no-extraneous-dependencies */
import React, { ComponentType } from 'react';
import {
  render,
  screen,
  fireEvent,
  waitFor,
  within,
  cleanup,
  RenderResult,
  getByRole,
  getByTestId,
  getByText,
  act,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../store/store';

const customRender = (component: React.ReactElement): RenderResult => {
  const context: ComponentType = ({ children }:any) => (
    <Provider store={store}>
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </Provider>
  );
  return render(component, { wrapper: context });
};

export { customRender as render };

export {
  screen,
  fireEvent,
  waitFor,
  within,
  cleanup,
  getByRole,
  getByTestId,
  getByText,
  act,
};
