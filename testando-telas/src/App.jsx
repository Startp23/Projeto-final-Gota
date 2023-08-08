
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Inicio from './pages/inicio';
import Login from './pages/login';
import Cadastro from './pages/cadastro';
import IniPos from './pages/inicio-pos';
import Duvidas from './pages/duvidas';
import Perfil from './pages/perfil';
import Agende from './pages/agendamento';
import Erros from "./pages/erros"; 
import Confirma from "./pages/confirma";
import DuvidasPos from "./pages/duvidas._pos";
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
        <Route path="/duvidas" element = {<Duvidas/>}/>
        <Route path="/perfil" element = {<Perfil/>}/>
        <Route path="/agende" element = {<Agende/>}/>
        <Route path="/erros" element = {<Erros/>}/>
        <Route path="/confirma" element = {<Confirma/>}/>
        <Route path="/DuvidasPos" element = {<DuvidasPos/>}/>
      </Routes>
    </BrowserRouter>  
    </>

  )
}

export default App;