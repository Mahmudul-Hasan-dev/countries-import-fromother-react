// import logo from './logo.svg';
import './App.css';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';
import Users from './components/Users/Users';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      <Users></Users>
    </div>
  );
}

export default App;
