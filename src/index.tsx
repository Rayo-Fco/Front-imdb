import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import App from './App';
import { store } from './store/store';

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
);
