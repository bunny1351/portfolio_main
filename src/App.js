import React from 'react'
import './app.scss'
import Navbar from './Navbar';
import Home from './Home';
import Works from './Works';
import Contact from './Contact';
import {
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />  
        <Route path="/works" component={Works} />
        <Route path="/contact" component={Contact} />
      </Switch> 
    </div>
  );
}
export default App;
