import React, { useState } from 'react';
import './App.css';
import MainPage from './MainPage/MainPage'
import NavComponent from './Navigation/NavComponent'
import SideComponent from './SideComponent/SideComponent';

function App() {

  const [state, setState] = useState(0)
  function changeState(state: number) {
    setState(state)
  }

  return (
    <div className="App">
      <NavComponent changeState={changeState} state = {state}></NavComponent>
      <MainPage state={state}></MainPage>
      <SideComponent></SideComponent>
    </div>
  );
}

export default App;
