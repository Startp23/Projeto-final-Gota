import React from 'react'
import insta from '../img/instagram.png'
import './inicio-pos.css';
import logoB from '../img/logo_branca.png';
import imagemI from '../img/imagem_inicio.png';
import { Link } from 'react-router-dom';

export default function inicio() {
  return (
    <>
    {/* barra suspensa*/}
    <nav className="navbar-inicio-pos">
      <div id='start-inicio-pos' className="menu_item-inicio-pos">
        <a className="navbar-bran-inicio-pos" href="/inicio">
          <img className='imglogo-inicio-pos' src={logoB} alt="Logo" />
        </a>
      </div>
      <div id='end-inicio-pos' className='menu_item-inicio-pos'>
        <ul>
          <Link to='/' className='item-click-inicio-pos' href="menu.jsx">Sair</Link>
          <a className='item-click-inicio-pos' href="#text">Contatos</a>
          <a className='item-click-inicio-pos' href="#sobre-nos">Sobre nós</a>
          <a className='item-click-inicio-pos' href="#sobre-nos">Perfil</a>
          <Link to='' >
              <button
                id='login-menu-inicio-pos' className='item-click-inicio-pos' href="#text">Doar</button>
          </Link>
          
        </ul>
      </div>
    </nav>
    {/*Barra suspensa*/}


    <main>
      {/*Imagem e título principal*/}
      <div className='topo-site-inicio-pos'>
        <div id='img-topo-inicio-pos' className='div-topo-inicio-pos'>
          <img id='imgsangue-inicio-pos' src={imagemI} alt="" />
        </div>
        <div id='direita_inicio-inicio-pos'>
          <div id='bolinha_desfocada1-inicio-pos'></div>
          <div className='text-doe-sangue-inicio-pos'>
            <h1 > Você é a gota que faltava,<br /> doe sangue</h1>
            <p id='text-topo-inicio-pos' >Doe sangue hoje e faça parte dessa<br />
              corrente de solidariedade que faz<br /> a
              diferença no mundo.</p>
              <div className='btn-doe-inicio-pos'>
            <button id='doe-agora-inicio-pos'>Doe agora</button>
            <button id='no-doador-inicio-pos'>Não sou doador</button></div>
          </div>
        </div>
      </div>
      
      {/*Imagem e título principal*/}
    
      <div className="informacao-inicio-pos">
        <div id='cabron-inicio-pos'></div>
        <div className='textos-inicio-pos'><h2 className='titulos-inicio-pos'>Junte-se a nós para salvar vidas!</h2>
          <div className='seja-parceiro-inicio-pos'>
            <p className='escrita-textos-inicio-pos'>Seja um parceiro em nossa missão de doação de sangue e<br /> faça a diferença na nossa cidade.</p>
            <button>Seja um parceiro</button>
          </div>
        </div>

        <div className='textos-inicio-pos'>
          <h3>Qual a importância da doação de sangue?</h3>
          <p className='escrita-textos-inicio-pos'>Doar sangue é um ato solidário que salva vidas e mantém os estoques de sangue estáveis. Além de ajudar em casos de emergência, a doação regular promove um check-up de saúde e fortalece a comunidade. É um gesto de generosidade e cuidado com o próximo.</p>
        </div>

        <div className='textos-inicio-pos'>
          <h3>Requisitos para ser doador de sangue são:</h3>

          <p className='escrita-textos-inicio-pos'>Apresentar um documento oficial com foto (RG, CNH, etc.) em bom estado de conservação;
            <br /><br />
            Ter idade entre 16 e 69 anos desde que a primeira doação seja realizada até os 60 anos (menores de idade precisam de autorização e presença dos pais no momento da doação);<br /><br />
            Não é permitido realizar doação acompanhado de menores de 12 anos (exceto se o menor estiver acompanhado de dois adultos, sendo necessário o revezamento dos mesmos enquanto acontece a doação);<br /><br />
            Estar em boas condições de saúde.<br /><br />
            Pesar no mínimo 50 kg.<br /><br />
            Não ter feito uso de bebida alcoólica nas últimas 12 horas;<br /><br />
            Após o almoço ou ingestão de alimentos gordurosos, aguardar 3 horas. Não é necessário estar em jejum desde que evite alimentos gordurosos;<br /><br />
            Se fez tatuagem e/ou piercing, aguardar 12 meses. Exceto para região genital e língua (12 meses após a retirada);<br /><br />
            Em caso de diabetes, deverá estar controlada e não fazer uso de insulina;<br /><br />
            Se passou por endoscopia ou procedimento endoscópico, aguardar 6 meses;<br /><br />
            Não ter tido Doença de Chagas;<br /><br />
            Não ter tido Infecções Sexualmente Transmissíveis (IST);<br /><br />
            Candidatos que apresentaram sintomas de gripe e/ou resfriado devem aguardar 10 dias após cessarem os sintomas e o uso das medicações;<br /><br />
            Aguardar 48h para doar caso tenha tomado a vacina da gripe, desde que não esteja com nenhum sintoma;<br /><br />
            Candidatos que viajaram para o exterior devem entrar em contato com o Banco de Sangue para entender o período que não pode doar (varia de país a país).</p>
        </div>
        <div id='benefits-inicio-pos' className='textos-inicio-pos'>
          <h3>Quais os benefícios para doar sangue?</h3>
          <div className='beneficios-inicio-pos'>
            <p className='escrita-textos-inicio-pos'>Salvar vidas: A doação de sangue é fundamental para suprir a demanda de transfusões e ajudar pacientes em situações de emergência, cirurgias e tratamentos médicos.<br /><br />

              Saúde cardiovascular: A doação regular de sangue pode ajudar a reduzir o risco de doenças cardiovasculares, como ataques cardíacos e derrames, promovendo a circulação saudável.<br /><br />

              Check-up de saúde: Antes de doar sangue, são realizados exames para detectar doenças transmissíveis, o que pode proporcionar um oportunidade de receber orientações médicas e identificar possíveis condições de saúde.<br /><br />

              Bem-estar emocional: A doação de sangue é um ato altruísta que promove uma sensação de satisfação e bem-estar emocional, sabendo que está ajudando outras pessoas em momentos difíceis.
            </p>
            <img src="image39.png" alt="" />
          </div>
        </div>
        <div id='sobre-nos' className='textos'>
          <h3>Sobre nós </h3>
          <p className='escrita-textos-inicio-pos'>Nós somos uma equipe de estudantes do Projeto Social Start LATAM, empenhados em facilitar e incentivar a doação de sangue para ajudar aqueles que necessitam no Recife. Conscientes do baixo índice de doação, buscamos promover essa boa ação e conscientizar a população
            sobre o impacto positivo que ela pode ter ao salvar vidas. Estamos comprometidos em fazer a diferença e contribuir para um mundo melhor.</p>
        </div>
      </div>
    </main>
    <footer>
      <div className='footer-content-inicio-pos'>
        <div id='caminho_rede-inicio-pos' >
          <ul>
            <img className='icon_insta-inicio-pos' src={insta} alt="logo instagram" />
            <img className='QR_insta-inicio-pos' src="" alt="Gr" />
          </ul>
        </div>
        <div id='lado_direito_footer-inicio-pos'>
          <div className='rodape-inicio-pos'>
            <ul>
              <h4>Conteúdo</h4>
              <a href="">Notícias</a>
              <a href="">Dúvidas</a>
              <a href="#benefits">Benefícios de Doar</a>
            </ul>
          </div>
          <div className='rodape-rede-inicio-pos'>
            <ul>
              <h4>Contatos</h4>
              <a href="">Instagram</a>
          
            </ul>
          </div>
          <div className='rodape-inicio-pos'>
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
