import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Let we see the output of Javascript</h1>
        <button onClick={window['alertMsg']}>SUBMIT</button>
      </header>
    </div>
  );
}

export default App;
