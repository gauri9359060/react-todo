// import logo from './logo.svg';
import './App.css';
import { Todos } from './components/Todos';


function App() {
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <div className='wrapper'>
          <div className='inputWrapper'>
              <Todos />
          </div>
          
      </div>
      
    </div>
  );
}

export default App;
