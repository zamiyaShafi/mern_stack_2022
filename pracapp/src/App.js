import logo from './logo.svg';
import './App.css';
import './External.css'
import Variables from './Variables';
import Function from './Function';
import Classes from './Classes';
import Array from './Array';
import Arrowfunction from './Arrowfunction';
import Destructuring from './Destructuring';
import Import from './Import'
import Spreadoperator from './Spreadoperator';
import Ternaryoperator from './Ternaryoperator';
import Rfc from './Rfc';
import Rcc from './Rcc';
import Event from './Event';
import Condition from './Condition';
import List from './List'
import Test from './Test'
import Practice from './Practice';

function App() {
  const style1={
    color:"red"
    
  }
  return (
    <div className="App">
      <>
      <h1 style={{color:"brown"}}>-------------style start------------</h1>
      <h1 style={{color:"brown"}}>-------------Inline style------------</h1>

      <h1 style={{color:"red"}}>{"hello world"}</h1>
      <h1 style={{color:"brown"}}>-------------Internal style------------</h1>
      <h2 style={style1}>{"Hey watsup"}</h2>
      <h1 style={{color:"brown"}}>-------------External style------------</h1>
      <h3 className='back'>{"hey what are you doing"}</h3>
      <h6>{"note:here we can write styles for class and id while using external styles.meanwhile we cannot write use internal css format for external css"}</h6>
      <h1 style={{color:"brown"}}>-------------style end------------</h1>
      <Variables/>
      <Function/>
      <Classes/>
      <Array/>
      <Arrowfunction/>
      <Destructuring/>
      <Import/>
      <Spreadoperator/>
      <Ternaryoperator/>
      <Rfc/>
      <Rcc/>
      <Event/>
      <Condition/>
      <List/>
      <Test/>
      <Practice/>
      
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      </>
    </div>
  );
}

export default App;
