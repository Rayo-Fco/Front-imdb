import HomePage from './index';
import { render, } from '../../config/test-utils';



describe('HomePage', () => {

 it("01. HomePage matches snapshot correctly", () => {
    const component = render(<HomePage />);
    expect(component.asFragment()).toMatchSnapshot();
  });

});
