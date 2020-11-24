import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//route pages
import About from './routePages/About';
import Contact from './routePages/Contact';
import Portfolio from './routePages/Portfolio';
import { Route, Link, BrowserRouter as Router } from '../node_modules/react-router-dom';

import * as serviceWorker from './serviceWorker';

// const myRouter = (
//   <Router>
//     <div>
//       <ul>
//         <Link to='/'>Home</Link>
//         <Link to='/about'>About</Link>
//         <Link to='/contact'>Contact</Link>
//         <Link to='/portfolio'>Portfolio</Link>
//       </ul>

//       <Route exact path="/" component={App}></Route>
//       <Route path="/about" component={About}></Route>
//       <Route path="/contact" component={Contact}></Route>
//       <Route path="/portfolio" component={Portfolio}></Route>

//     </div>
//   </Router>
// )




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// ReactDOM.render (myRouter, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
