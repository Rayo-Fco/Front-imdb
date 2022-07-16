import axios from 'axios';
import MainRouter from './routers/MainRouter';

axios.defaults.baseURL = 'https://imdb-api.com/en/API/';

function App(): JSX.Element {
  return (<MainRouter />);
}

export default App;
