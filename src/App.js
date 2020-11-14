import React from 'react';
import logo from './logo.svg';
import './App.css';
import Modulecss from './Mycss.module.css';
import Welcome from './mycomponent/Welcome';
import ArrowFun from './mycomponent/Arrow';
import Welcome3 from './mycomponent2/Welcome3';
import Hello3 from './mycomponent2/Hello3'
import Condition1 from './mycomponent3/Condition1';
import Forcerefresh from './mycomponent3/Forcerefresh';
import Render from './reactDOM/Render';
import FindDom from './reactDOM/FindDom';
import SimpleForm from './ReactForm/SimpleForm';
import SignUp from './ReactForm/SignUp';
import Textarea from './ReactForm/Textarea';
import Select from './ReactForm/Select';
import List from './ReactForm/List';
import JsonList from './ReactForm/JsonList';
import Style from './css/Style';

function App() {
  return (
    <div className="App">
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
      
      {/* <Welcome></Welcome> */}
      {/* <ArrowFun></ArrowFun> */}
      {/* <Welcome3></Welcome3> */}
      {/* <Hello3></Hello3> */}
      {/* <Condition1></Condition1> */}
      {/* <Forcerefresh></Forcerefresh> */}
      {/* <Render></Render> */}
      {/* <FindDom></FindDom> */}
      {/* <SimpleForm></SimpleForm> */}
      {/* <SignUp></SignUp> */}
      {/* <Textarea></Textarea> */}
      {/* <Select></Select> */}
      {/* <List></List> */}
      {/* <JsonList></JsonList> */}
      <Style></Style>
    </div>
  );
}

export default App;
