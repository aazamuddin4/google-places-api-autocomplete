import logo from './logo.svg';
import './App.css';
import SearchLocationInput from './component/SearchLocationInput';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Please Choose Your Desired Location
        </p>
        <Provider store={store}>
        <SearchLocationInput onChange={() => null}/>
        </Provider>
      </header>
    </div>
  );
}

export default App;
