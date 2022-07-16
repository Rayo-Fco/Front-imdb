import App from './App';
import { act, render,screen, waitFor } from './config/test-utils';
describe('<App />', () => {

  it('01. App matches snapshot correctly', () => {
    act(()=>{render(<App />)})
    
    waitFor(() => expect(screen.findByText('imbd')).toBeInTheDocument())

  });
});
