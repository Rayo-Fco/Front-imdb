import App from './App';
import {
  render,
} from '@testing-library/react';
describe('<App />', () => {

  test('01. App matches snapshot correctly', () => {
    const component = render(<App />);
    expect(component.asFragment()).toMatchSnapshot();

  });
});
