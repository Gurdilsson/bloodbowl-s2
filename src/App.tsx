import React, { useState } from 'react';
import './App.css';
import MainPage from './MainPage/MainPage'
import NavComponent from './Navigation/NavComponent'
import SideComponent from './SideComponent/SideComponent';
import { BrowserView, MobileView } from 'react-device-detect';
import { isMobile } from 'react-device-detect';

function App() {

  const [state, setState] = useState(0)
  function changeState(state: number) {
    setState(state)
  }

  console.log(isMobile)

  return (
    <>
      {
        isMobile ? 
        <MainPage state={1}></MainPage>
        :
        <div className="App">
          <NavComponent changeState={changeState} state={state}></NavComponent>
          <MainPage state={state}></MainPage>
          <SideComponent></SideComponent>
        </div>
      }
    </>


  );
}

export default App;
