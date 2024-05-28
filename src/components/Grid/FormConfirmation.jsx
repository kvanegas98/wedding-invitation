import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert2';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { getWeddingByCode, sendResponse } from '../../services/api';
import AnimatedSection from '../Animations/Animation';

const ConfirmationForm = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [guest, setGuest] = useState(null);
    const [invitados, setInvitados] = useState([]);
    const [viewForm, setViewForm] = useState(true);
    const [responses, setResponses] = useState({});
    const [responseMessage, setResponseMessage] = useState('');
    const [isConfirmed, setIsConfirmed] = useState(null);


    const handleSearch = async () => {
        try {
            name.trim();
            const response = await getWeddingByCode(name);
            if (response) {
                setGuest(response);
                setInvitados(response.invitadosVista || []);
                setIsConfirmed(response.confirmado);
                setResponseMessage(null);
                setViewForm(false);
            } else {
                setGuest(null);
                setInvitados([]);
            }
        } catch (error) {
            setGuest(null);
            setInvitados([]);
            swal.fire({
                title: 'Error',
                text: error.response.data.message,
                icon: 'error',
                customClass: {
                    title: 'my-swal-title',
                    icon: 'my-swal-icon'
                }
            });

        }
    };

    const handleChange = (idInvitado, idGrupo, field, value) => {
        setResponses(prevResponses => ({
            ...prevResponses,
            [idInvitado]: {
                ...prevResponses[idInvitado],
                idGrupo: idGrupo,
                idInvitado: idInvitado,
                [field]: value,
                Mensaje: message
            }
        }));
    };

    const reset = () => {
        setViewForm(true);
        setIsConfirmed(null);
        setInvitados([]);
        setName('')
        setResponses([])
        setMessage('')
    }

    const cleanUpArray = (array) => {
        return array.map(item => {
            const cleanedItem = {
                IdGrupo: item.IdGrupo || item.idGrupo,
                IdInvitado: item.IdInvitado || item.idInvitado,
                ConfirmacionAsistencia: item.ConfirmacionAsistencia || item.attendance,
                Mensaje: message
            };
            return cleanedItem;
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const responseArray = Object.values(responses);
            const data = cleanUpArray(responseArray);
            console.log(data)
            //  const response = await axios.post(`https://localhost:44388/api/Boda/Crear/`, data);
            const response = await sendResponse(data);
            if (data.length != invitados.length) {
                swal.fire({
                    title: 'Error',
                    text: 'Debe de confirmar toda la lista de invitados!',
                    icon: 'error',
                    customClass: {
                        title: 'my-swal-title',
                        icon: 'my-swal-icon'
                    }
                });
                return;
            }
            swal.fire({
                title: 'Correcto',
                text: 'Se ha confirmado el evento correctamente!',
                icon: 'success',
                customClass: {
                    title: 'my-swal-title',
                    icon: 'my-swal-icon'
                }
            });
            setViewForm(true);
            setIsConfirmed(null);
            setInvitados([]);
            setName('')
            setResponses([])
            setMessage('')

        } catch (error) {
            console.error(error);
            swal.fire({
                title: 'Error',
                text: 'Ha ocurrido un error!',
                icon: 'Error',
                customClass: {
                    title: 'my-swal-title',
                    icon: 'my-swal-icon'
                }
            });
            setViewForm(true);
            setIsConfirmed(null);
            setInvitados([]);
            setName('')
            setResponses([])
            setMessage('')
        }
    };
    const isButtonDisabled = name.trim() === '';

    return (
        <AnimatedSection animationClass="bounce">
        <div className="rsvp-form">
            {viewForm && (
                <div className="search-section">
                    <h1 className="form-letter" style={{ fontSize: '30px !important' }}>Confirmación</h1>
                    <p style={{ color: 'white', fontSize: '17px', fontFamily: 'sans-serif' }}>Ingresa tu código invitado y da click en buscar</p>
                    <input
                        type="text"
                        className="input-field"
                        placeholder="Ingresa el código de invitación"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button onClick={handleSearch} disabled={isButtonDisabled} className="search-button">Buscar</button>
                </div>
            )}

            {invitados.length > 0 && !isConfirmed && (
                <div className="confirmation-section">
                    <h3 className="form-letter">Confirmación de invitados</h3>
                    <p style={{ color: 'white' }}>Por favor indica quiénes asistirán</p>
                    <form onSubmit={handleSubmit} className="confirmation-form">
                        <div className="invitados-list">
                            {invitados.map(invitado => (
                                <div key={invitado.idInvitado} className="invitado">
                                    <span className="invitado-nombre">{invitado.nombreInvitado}</span>
                                    <label className="radio-label">
                                        <input
                                            type="checkbox"
                                            name={`attendance_${invitado.idInvitado}`}
                                            value="yes"
                                            checked={responses[invitado.idInvitado]?.attendance === 'yes'}
                                            onChange={(e) => handleChange(invitado.idInvitado, invitado.idGrupo, 'attendance', e.target.value)}
                                        />
                                        Sí, asistiré
                                    </label>
                                    <label className="radio-label">
                                        <input
                                            type="checkbox"
                                            name={`attendance_${invitado.idInvitado}`}
                                            value="no"
                                            checked={responses[invitado.idInvitado]?.attendance === 'no'}
                                            onChange={(e) => handleChange(invitado.idInvitado, invitado.idGrupo, 'attendance', e.target.value)}
                                        />
                                        No, asistiré
                                    </label>
                                </div>

                            ))}
                        </div>
                        <div>
                            <textarea
                                type="text-area"
                                className="textarea-field"
                                placeholder="Deja un mensaje para los novios"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />


                            <p style={{ color: 'white' }}>Notas: Agradecemos que, en caso de haber confirmado su asistencia y necesitar modificarla, nos lo notifiquen con un mínimo de 25 días de antelación al evento.</p>
                        </div>
                        <button type="submit" className="submit-button">Confirmar</button>
                    </form>
                </div>
            )}

            {invitados.length > 0 && isConfirmed && (
                <div className="already-confirmed-section">
                    <h3 style={{ color: '#fff', textAlign: 'center', marginBottom: '20px', textTransform: 'uppercase' }}>Confirmaciones de Asistencia</h3>
                    <div className="invitados-list">
                        {invitados.map(invitado => (
                            <div key={invitado.idInvitado} className="invitado" style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>

                                    <div>
                                        <h4 style={{ margin: 0, fontSize: '20px', fontWeight: 'bold', color: '#D9DBD1' }}>{invitado.nombreInvitado}</h4>
                                        <p style={{ margin: 0, color: '#E3E4DD', fontSize: '16px' }}>{invitado.confirmacionAsistencia == 'yes' ? 'Asistirá' : 'No asistirá'}</p>
                                    </div>
                                </div>
                                <div>
                                    {invitado.confirmacionAsistencia == 'yes' ? (
                                        <FaCheck style={{ color: 'green', fontSize: '24px' }} />
                                    ) : (
                                        <FaTimes style={{ color: 'red', fontSize: '24px' }} />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <button onClick={reset} className="search-button">Reiniciar</button>
                </div>
            )}


        </div>
        </AnimatedSection>
    );
};

export default ConfirmationForm;
