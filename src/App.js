import './App.css';
import Contactus from './components/Contactus';
import Fifthcomponent from './components/Fifthcomponent';
import Firstcomponent from './components/Firstcomponent';
import Fourthcomponent from './components/Fourthcomponent';
import Help from './components/Help';
import Secondcomponent from './components/Secondcomponent';
import Thirdcomponent from './components/Thirdcomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Welcome to learning react</h1> 
       <h2>React is Fun</h2>
       </header>

      {/*Below we render/display/show our components  */}
        <Firstcomponent />
        <Secondcomponent />
        <Contactus />
        <Help />
        <Thirdcomponent />
        <Fourthcomponent />
        <Fifthcomponent />
    </div>
  );
}

export default App;

// jsx (Javascript Html XML)
// Create two other components i.e Contactus and Help components and style them with your own contents. Render them on App.js component.
// npm start => node package module 
// npx => node package execute

// App.js is our root
