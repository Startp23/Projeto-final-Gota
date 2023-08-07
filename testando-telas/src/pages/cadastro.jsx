import React from 'react'
import './cadastro.css';
import { Link } from 'react-router-dom';
import face_cadastro_doador from '../img/facebook.png';
import google_cadastro_doador from '../img/google.png';
import logo_cadastro_doador from '../img/logo.png';
import { useForm } from "react-hook-form";
import img_cadastro from '../img/img_doador-6.png';

export default function cadastro() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
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
    const validatePasswordConfirmation = (value) => {
      if (!value) {
        return 'Confirmação de senha é obrigatória.';
      }
  
      // Verificar se a confirmação de senha é igual à senha digitada no campo anterior
      if (value !== watch('senha')) {
        return 'A confirmação de senha não coincide com a senha digitada.';
      }
  
      return true; // Passou na validação
    };
  return (
    <>
    <main className='boby_fundo_datela_doador_cadastro'> 
       
        <div className='img_login_usu_doador_cadastro'>
          <img  className="logo_no_login_doador_cadastro" src={logo_cadastro_doador} alt="logo" />
          <img className="imagem_cadastro" src={img_cadastro} alt="" />  
        </div>
       
          <div className='identificacao_login_usu_doador_cadastro'>
              
              <div className="bolinhas_desfocadas_doador_cadastro"></div>
               
                <div id="dirietalogin_doador_cadastro">
                  
                  <div className='titulo_do_login_doador_cadastro'>
                    <h1 className='titulo_h1_doador_cadastro'>Cadastre-se</h1>
                  </div>
                   
                    <form className='inputs_do_login_doador_cadastro' onSubmit={handleSubmit(onSubmit)}>
                     
                      <div id="escolhaDe_rede_doador_cadastro">
                        
                        <button className="botao_logarRedes_tela_doador_cadastro"><img className="icon_redes_login_doador_cadastro" src={google_cadastro_doador} alt="" /> <p className="texto_botao_rede_doador_cadastro">Cadastrar com o google</p> </button>                     
                        <button className="botao_logarRedes_tela_doador_cadastro"><img className="icon_redes_login_doador_cadastro" src={face_cadastro_doador }alt="" /> <p className="texto_botao_rede_doador_cadastro">Cadastrar com o facebook</p></button>
                      
                      </div>
                        <input className='local_dados_doador_cadastro' type="text" placeholder='Nome completo' {...register('nome', { required: true })}/>
                          {errors.nome && <span className="informacao_oculta_cadastro_doador">Este campo é obrigatório</span>}
  
                        <input className='local_dados_doador_cadastro' type="text" placeholder='E-mail' {...register('email', { required: true, pattern: /^\S+@\S+$/i })}/>
                          {errors.email && <span className="informacao_oculta_cadastro_doador">Por favor, insira um e-mail válido</span>}
                        
                        <input className='local_dados_doador_cadastro' type="password" placeholder='Senha' {...register('senha', { validate: validatePassword })}/>
                          {errors.senha && <span className="informacao_oculta_cadastro_doador">{errors.senha.message}</span>}
                        
                        <input className='local_dados_doador_cadastro' type="password" placeholder=' Confirmar senha' {...register('confirmarSenha', { validate: validatePasswordConfirmation })}/>
                          {errors.confirmarSenha && <span className="informacao_oculta_cadastro_doador">{errors.confirmarSenha.message}</span>}
                     
                          <div className="div_botao_doador">
  
                            <Link to='/' ><button className='Botao_voltar_login_tela_doador_cadastro'>Voltar</button></Link>
                            <Link to='/inipos' ><button className='Botao_entrar_login_tela_doador_cadastro'>Entrar</button></Link>
                          
                          </div>
                   
                    </form>
               
                </div>
                
                <div className="bolinhas_desfocadas_LOGIN2_doador_cadastro"></div>
         
          </div>
    
    </main>
      </>
  )
}
