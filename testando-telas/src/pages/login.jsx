import './login.css';
import { Link } from 'react-router-dom';
import img_Log_facebook from '../img/facebook.png';
import img_log_google from '../img/google.png';
import logo_log_doador_gota from '../img/logo.png';
import img_tela_login from '../img/imagemLogin-1.png';
import { useForm } from "react-hook-form";
import { useState } from 'react'; // Importe o useState

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isEmpty, setIsEmpty] = useState(false); // Estado para controlar campos vazios
  const onSubmit = (data) => {
    // Verifica se os campos estão vazios antes de prosseguir
    if (data.email.trim() === '' || data.senha.trim() === '') {
      setIsEmpty(true); // Define o estado para indicar campos vazios
      return;
    }

    // Lógica de login aqui
    console.log(data);
  };

  const validatePassword = (value) => {
    if (!value) {
      return 'Senha é obrigatória';
    }
    if (value.length < 8) {
      return 'A senha deve ter pelo menos 8 caracteres';
    }
    // Verificar se contém pelo menos uma letra maiúscula, uma letra minúscula e um número
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) {
      return 'A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula e um número';
    }

    return true; // Passou na validação
  };

  return (
    <>
      <main className='boby_fundo'>

        <div className='img_login_usu'>
          <img className="logo_no_login" src={logo_log_doador_gota} alt="logo" />
          <img className='imagem_central_login' src={img_tela_login} alt="" />
        </div>

        <div className='identificacao_login_usu'>

          <div className="bolinhas_desfocadas"></div>

          <div id="dirietalogin">

            <div className='titulo_do_login'>
              <h1 className='titulo_h1'>Entrar</h1>
            </div>

            <form className='inputs_do_login' onSubmit={handleSubmit(onSubmit)}>

              <div id="escolhaDe_rede">
                <button className="botao_logarRedes"><img className="icon_redes_login" src={img_log_google} alt="" /> <p className="texto_botao_rede">Entrar com o google</p> </button>
                <button className="botao_logarRedes"><img className="icon_redes_login" src={img_Log_facebook} alt="" /> <p className="texto_botao_rede">Entrar com o facebook</p></button>
              </div>

              <input className='local_dados' type="text" placeholder='E-mail' {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
              {errors.email && <span className="informacao_oculta_login_doador">Por favor, insira um e-mail válido</span>}

              <input className='local_dados' type="password" placeholder='Senha' {...register('senha', { validate: validatePassword })} />
              {errors.senha && <span className="informacao_oculta_login_doador">{errors.senha.message}</span>}

              {/* Exibe uma mensagem de erro se algum campo estiver vazio */}
              {isEmpty && <p className="informacao_oculta_login_doador">Preencha todos os campos antes de continuar.</p>}

              <p id='esqueceuSenha_usuario'>Esqueceu sua senha? <Link to='/erros' id='link_esqueceuSenha' href="">Clique aqui</Link></p>

              <Link to='/' ><button className='Botao_voltar_login'>Voltar</button></Link>
              <Link to='/inipos' ><button type='submit' disabled={Object.keys(errors).length > 0} className='Botao_entrar_login'>Entrar</button></Link>
            </form>

          </div>

          <div className="bolinhas_desfocadas_LOGIN2"></div>

        </div>
      </main>
    </>
  )
}
