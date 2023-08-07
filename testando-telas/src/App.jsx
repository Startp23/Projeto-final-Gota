import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Inicio from './pages/inicio';
import Login from './pages/login';
import Cadastro from './pages/cadastro';
import IniPos from './pages/inicio-pos'
import './App.css';

function App() {
  return (
    <>
        <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Inicio/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/cadastro" element = {<Cadastro/>}/>
        <Route path="/inipos" element = {<IniPos/>}/>
      </Routes>
    </BrowserRouter>  
    </>

  )
}

export default App;