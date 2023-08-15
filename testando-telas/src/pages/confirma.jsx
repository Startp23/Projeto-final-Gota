
import confirmaSim from '../img/confirme.png'
import { Link } from 'react-router-dom';
import './confirma.css'

export default function confirma() {
  return (
    <>
    
    <main id='Tela_de_confirmacao'>
        <div id='tela-confirmar'>
            <div className='confirmar'><img src={confirmaSim} alt="" /></div>
            <h1 className='texto_confirma'>Confirmado com sucesso!</h1>
            <Link to='/inipos' ><button id='botao_confirmacao_voltar'>voltar</button></Link>
        </div>
    </main>
    
    </>
  )
}
