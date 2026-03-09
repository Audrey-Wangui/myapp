import './App.css';
import Contactus from './components/Contactus';
import Fifthcomponent from './components/Fifthcomponent';
import Firstcomponent from './components/Firstcomponent';
import Fourthcomponent from './components/Fourthcomponent';
import Help from './components/Help';
import Notfound from './components/Notfound';
import Secondcomponent from './components/Secondcomponent';
import Sixthcomponent from './components/Sixthcomponent';
import Thirdcomponent from './components/Thirdcomponent';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
   <Router>
     <div className="App">

      <nav>
        <Link to="/first" className='navlink'>First</Link>
        <Link to="/second" className='navlink'>Second</Link>
        <Link to="/third" className='navlink'>Third</Link>
        <Link to="/fourth" className='navlink'>Fourth</Link>
        <Link to="/fifth" className='navlink'>Fifth</Link>
        <Link to="/sixth" className='navlink'>Sixth</Link>
        <Link to="/contactus" className='navlink'>Contactus</Link>
        <Link to="/help" className='navlink'>Help</Link>
      </nav>
      <header className="App-header">
       <h1>Welcome to learning react</h1> 
       <h2>React is Fun</h2>
       </header>

      {/*Below we render/display/show our components  */}
      <Routes>
        <Route path="/first" element={<Firstcomponent />} />
        <Route path="/second" element={<Secondcomponent />} /> 
        <Route path="/third" element={<Thirdcomponent />} />
        <Route path="/fourth" element={<Fourthcomponent />} />
        <Route path="/fifth" element={<Fifthcomponent />} />
        <Route path="/sixth" element={<Sixthcomponent />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/help" element={<Help />} />
        <Route path='*' element={<Notfound />} />

      </Routes>
        
    </div>
   </Router>
  );
}

export default App;

// jsx (Javascript Html XML)
// Create two other components i.e Contactus and Help components and style them with your own contents. Render them on App.js component.
// npm start => node package module 
// npx => node package execute

// App.js is our root
