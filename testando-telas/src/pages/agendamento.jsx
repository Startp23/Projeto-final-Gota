/* eslint-disable no-unused-vars */
import React from 'react';
import './agendamento.css'; 
import { Link } from 'react-router-dom';
function Agendar() {
    return (
        <main className="background">
            <div className="popup">
                <div className='titulo'>
                    <h1 id='titulo_escrito'>Agende a sua doação</h1>
                </div>
                <form action="formulario">
                        
                        <div className='nomeCPF'>
                            <div className='Nome'>
                                <label htmlFor="nome" id='nomeU'>Nome completo:</label>
                                <input type="text" id="nome" />
                            </div>
                            <div className='cpfU'>
                            <label htmlFor="cpf" id='CPF'>CPF:</label>
                            <input type="text" id="cpf" />
                            </div>
                        </div>


                        <div className='telefoneTipoS'>
                            <div className='Telefone'>
                            <label htmlFor="telefone" id='telefoneCelular'>Telefone:</label>
                            <input type="text" id="telefone" />
                            </div>
                            <div className='ts'>
                            <label htmlFor="tipo-sanguineo" id='sangueT'>Tipo sanguíneo:</label>
                            <select id="tipo-sanguineo">
                                <option value="tipoS" id='selTS' disabled selected>Selecione</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                                <option value="Ainda não sei">Ainda não sei</option>
                                {/* Adicione mais opções de tipos sanguíneos conforme necessário */}
                            </select>
                            </div>
                        </div>

                        <div className='ondeDia'>
                            <div className='ondeD'>
                            <label htmlFor="local-doacao" id='onde-doar'>Onde doar:</label>
                            <select id="ondeDoar">
                                <option value="onde-doar" id='selOD' disabled selected>Selecione</option>
                                <option value="text">Hemope</option>
                                <option value="text">Banco de sangue Hemato</option>
                                <option value="text">IHENE-Instituto de Hematologia do Nordeste</option>
                                <option value="text">Gsh banco de sangue</option>
                                <option value="text">Laboratório de Análise Clínica e Sangue HMAR</option>
                                {/* Adicione mais opções de cidades conforme necessário */}
                            </select>
                            </div>
                            <div className='dia_doacao'>
                            <label htmlFor="dia-doacao" id='Ddoacao'>Dia:</label>
                            <input pattern type="number" id="dia-doacao" min="1" max="31" />
                            </div>
                        </div>

                        <div className='mesHora'>
                            <div className='doacaoMes'>
                            <label htmlFor="mes-doacao" id='Mdoacao'>Mês:</label>
                            <select id="opcao_meses">
                                <option value="opcao-meses" id='selMD' disabled selected>Selecione</option>
                                <option value="text">Janeiro</option>
                                <option value="text">Fevereiro</option>
                                <option value="text">Março</option>
                                <option value="text">Abril</option>
                                <option value="text">Maio</option>
                                <option value="text">Junho</option>
                                <option value="text">Agosto</option>
                                <option value="text">Setembro</option>
                                <option value="text">Outubro</option>
                                <option value="text">Novembro</option>
                                <option value="text">Dezembro</option>
                                {/* Adicione mais opções de meses conforme necessário */}
                            </select>
                            </div>
                            <div className='Hdoacao'>
                            <label htmlFor="horario" id='horadoacao'>Horário:</label>
                            <select id="horario-disponivel" required>
                                <option value="horarios_doacao" id='selHD' disabled selected>Selecione</option>
                                <option value="time">7:30</option>
                                <option value="time">8:00</option>
                                <option value="time">8:30</option>
                                <option value="time">9:00</option>
                                <option value="time">9:30</option>
                                <option value="time">10:00</option>
                                <option value="time">10:30</option>
                                {/* Adicione mais opções de horários conforme necessário */}
                            </select>
                            </div>
                        </div>



                        <div className='Pdoou'>
                        <label htmlFor="ja-doou" id='ja_doou'>Já doou antes?</label>
                        <select id="simEnao">
                            <option value="Pdoou" id='selJD' disabled selected>Selecione</option>
                            <option value="text">Sim</option>
                            <option value="text">Não</option>
                        </select>
                        </div>


                        <div className='botoesVC'>
                            <Link to='/inipos'><button type="submit" id="botaovoltar">Voltar</button></Link>
                            <Link to='/confirma' ><button type="submit" id="botaoconfirmar">Confirmar</button></Link>
                        </div>
                </form>

            </div>
        </main>

    );
}

export default Agendar;