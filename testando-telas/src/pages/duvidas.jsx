

import './duvidas.css';
import logoB from '../img/logo_branca.png';
import imagemI from '../img/imagem_inicio.png';
import { Link } from 'react-router-dom';


export default function Duvidas() {
  return (
    <>
    {/* barra suspensa*/}
    <nav className="navbar-duvidas">
      <div id='start-duvidas' className="menu_item-duvidas">
        <a className="navbar-bran-duvidas" href="/inicio">
          <img className='imglogo-duvidas' src={logoB} alt="Logo" />
        </a>
      </div>
      <div id='end-duvidas' className='menu_item-duvidas'>
        <ul>
          <Link to='/' className='item-click-duvidas' href="menu.jsx">Início</Link>
          <a className='item-click-duvidas' href="#sobre-nos">Sobre nós</a>
          <Link to='/login' >
              <button
                id='login-menu-duvidas' className='item-click' href="#text">Entrar</button>
          </Link>
          
            <Link to='/cadastro' >
                <button
                  id='cadastro-menu-duvidas' className='item-click-duvidas' href="#text">Cadastre-se</button>
            </Link>
          
        </ul>
      </div>
    </nav>
    {/*Barra suspensa*/}


    <main>
      {/*Imagem e título principal*/}
      <div className='topo-site-duvidas'>
        <div id='img-topo-duvidas' className='div-topo-duvidas'>
          <img id='imgsangue-duvidas' src={imagemI} alt="" />
        </div>
        <div id='direita_inicio-duvidas'>
          <div id='bolinha_desfocada1-duvidas'></div>
          <div className='text-doe-sangue-duvidas'>
            <h1 > Você é a gota que faltava,<br /> doe sangue</h1>
            <p id='text-topo-duvidas' >Doe sangue hoje e faça parte dessa<br />
              corrente de solidariedade que faz<br /> a
              diferença no mundo.</p>
              <div className='btn-doe-duvidas'>
            <Link to='/login' ><button id='doe-agora-duvidas'>Doe agora</button></Link>
            <Link to='/cadastro' ><button id='no-doador-duvidas'>Não sou doador</button></Link>
            </div>
          </div>
        </div>
      </div>
      
      {/*Imagem e título principal*/}
    
      <div className="informacao-duvidas">




        <div className='textos-duvidas'>
          <h3>Duvidas frequentes:</h3>

          <p className='escrita-textos-duvidas'>      <h2>1. Quem pode doar?</h2>
      <p>Qualquer pessoa com idade entre 18 e 69 anos que pese mais de 50 quilos. Jovens de 16 ou 17 anos
        também estão aptos, desde que tenham o consentimento dos pais ou dos responsáveis.</p>
      <h2>2. Qual o horário de funcionamento?</h2>
      <p>Para funcionamento administrativo é de segunda à sexta das 7h30 às 17h30. Para doação: Segunda a
        sábado (inclusive feriados) das 7h15 às 18h.</p>
      <h2>3. Quanto tempo demora?</h2>
      <p>A coleta do sangue é bem rápida: leva de 8 a 12 minutos. Antes, o doador faz uma triagem e passa
        algumas informações de saúde para os funcionários do local.</p>
      <h2>4. O procedimento oferece algum perigo?</h2>
      <p>Não. A doação é totalmente segura e não apresenta nenhum risco. Os materiais utilizados, como a
        agulha e os cateteres, são descartáveis.</p>
      <h2>5. Quanto sangue é retirado?</h2>
      <p>Em média, são coletados 450 mililitros. Esse volume pode salvar a vida de até quatro pessoas.</p>
      <h2>6. Mas meu corpo não vai sentir falta desse sangue?</h2>
      <p>Não. Nós possuímos cerca de 5 litros do líquido vermelho circulando pelos vasos. A retirada não
        prejudica em nada: o organismo repõe e alcança os níveis normais em até 72 horas.</p>
      <h2>7. Onde eu posso doar?</h2>
      <p>Nos principais hospitais e hemocentros próximos da sua casa. Para mais informações, acesse o site
        do Ministério da Saúde ou das secretarias de saúde estaduais e municipais.</p>
      <h2>8. Existem algumas doenças que impedem a doação de sangue?</h2>
      <p>Sim. Doenças infecciosas, como a gripe, e inflamatórias, como aquelas que atacam o intestino,
        exigem que a doação seja postergada para outra data. Em caso de dúvida, converse com o profissional de saúde do
        hemocentro para saber se tudo está ok.</p>
      <h2>9. E o que eu preciso levar no dia da doação?</h2>
      <p>Apenas um documento original com foto.</p>
      <h2>10. Posso doar apresentando cópia de documentos?</h2>
      <p>Não. A Legislação exige que seja apresentado um documento oficial com foto. Essa medida é muito
        importante para identificar você corretamente e evitar erros na emissão dos seus resultados de exames.</p>
      <h2>11. Posso apresentar CNH digital para doar sangue?</h2>
      <p>Sim. Os hospitais estão preparados para fazer a sua identificação.</p>
      <h2>12. Eu fiz uma cirurgia recentemente. Posso doar sangue?</h2>
      <p>Você deve esperar 72 horas para doar sangue após uma extração dentária. Operações simples, como
        apendicite e retirada de varizes, pedem 3 meses. Procedimentos mais complexos, como a remoção da tireoide ou de
        um rim, meio ano. Caso você tenha passado por uma transfusão de sangue ou fez uma tatuagem, é importante
        aguardar por um ano.</p>
      <h2>13. E quanto tempo eu tenho que esperar entre uma doação e outra?</h2>
      <p>Nos principais hospitais e hemocentros próximos da sua casa. Para mais informações, acesse o site
        do Ministério da Saúde ou das secretarias de saúde estaduais e municipais.</p>
      <h2>14. E depois de doar sangue? Devo seguir alguma recomendação médica?</h2>
      <p>Sim. Evite esforços físicos, beba bastante água, não fume por duas horas e evite ingerir álcool
        pelo resto do dia. Também é importante não praticar esportes radicais, como paraquedismo ou mergulho, ou dirigir
        veículos de grande porte.</p>
      <h2>15. Posso Ingerir bebidas alcoólicas antes da doação?</h2>
      <p>A ingestão de álcool na dose máxima de 40g impede a doação por um prazo de 12 horas. Consumo em
        dose superior impedirá a doação por 24h.</p></p>
        </div>
      </div>
    </main>
    <footer>
      <div className='footer-content-duvidas'>

        <div id='lado_direito_footer-duvidas'>
          <div className='rodape-duvidas'>
            <ul>
              <h4>Conteúdo</h4>
              <a href="">Notícias</a>
              <a href="">Dúvidas</a>
              <a href="#benefits">Benefícios de Doar</a>
            </ul>
          </div>
          <div className='rodape-rede-duvidas'>
            <ul>
              <h4>Contatos</h4>
              <a href="https://instagram.com/gotade.esperanca?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D">Instagram</a>
          
            </ul>
          </div>
          <div className='rodape-duvidas'>
            <ul>
              <h4>Conta</h4>
              <a href="">Perfil</a>
              <a href="">Login</a>
              <a href="">Cadastro</a>
            </ul>
          </div>
        </div>

      </div>

    </footer>
    </>
  )
}
