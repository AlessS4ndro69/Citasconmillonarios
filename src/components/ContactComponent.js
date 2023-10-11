import React, { useRef } from "react";
import { useState } from "react";
import Loader from "./LoaderComponent";
import { FaComments } from "react-icons/fa";
import Modal from "react-modal";
import emailjs from '@emailjs/browser';

const Contact = ()=> {
    const form = useRef();

    const [isOpenModal, setOpenModal] = useState(false);
    const [message,setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [isSend, setSend] = useState(false);
    const [email, setEmail] = useState("");

    const handleMessageChange = (event) => {
        const newText = event.target.value;
        setMessage(newText);
      };
    
    const closeModal = () => {
        setOpenModal(false);
    };

    const handleSendMessage =(e)=> {
        

        if(message && email){
            setLoading(true);
            e.preventDefault();
            //console.log("enviando mensaje : ",form.current);
            emailjs.sendForm('service_awx2qdq', 'template_2zqzq6h', form.current, 'ueUSGmgK3-6gaIvFZ')
                .then((result) => {
                    //console.log(result.text);
                    //setOpenModal(false);
                    setLoading(false);
                }, (error) => {
                    console.log(error.text);
                });
            
            setMessage("");
            setSend(true);
        }
        
    }

    return (
        <div>
            <div onClick={()=> setOpenModal(true)}>
                <FaComments/> Contacto
            </div>
            <Modal
            isOpen={isOpenModal}
            onRequestClose={closeModal}
            className="registration-modal"
            overlayClassName="registration-modal-overlay"
            >
            <div className="modal-content"> {/* Agrega la clase modal-content */}
                {!loading && !isSend &&  <h3 >Contactar al administrador</h3>}
                {!loading && !isSend && <div className="form-group">
                <form ref={form} onSubmit={handleSendMessage}>
                <label>Email</label>
                <input type="email" name="user_email" onChange={(e) => setEmail(e.target.value)}/>
                <div><label htmlFor="message">Mensaje:</label></div>
                    <textarea
                        name="message"
                        
                        onChange={handleMessageChange}
                        rows={5} // Puedes ajustar la cantidad de filas según tus necesidades
                        cols={40} // Puedes ajustar la cantidad de columnas según tus necesidades
                        placeholder="Escribe tu mensaje aquí..."
                        required
                    />
                </form>
                </div>}
                
                {!loading && !isSend &&<button onClick={handleSendMessage}>Enviar</button>}
                <Loader loading={loading} color = {"#007bff"}/>
                
                {isSend && !loading && <h3>Mensaje enviado correctamente</h3>}
                {isSend && !loading && <button onClick={()=> setOpenModal(false)}>Aceptar</button>}
            </div>
            
            </Modal>
        </div>
    );
};



export default Contact;