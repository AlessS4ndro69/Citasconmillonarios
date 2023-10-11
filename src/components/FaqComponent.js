// Faq.js

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

import './Faq.css';

const Faq = () => {
  return (
    <div className="faq-container">
      
      <h2>¡Hola a todas las chicas ambiciosas y soñadoras!</h2>

      <p>¿Estás lista para darle un giro emocionante a tu vida? ¡Nosotros también! Permítenos presentarte a Citasconmillonarios.com, la aplicación web que te conecta con personas solventes que están listas para apoyarte en tu camino hacia el éxito y la realización de tus sueños.</p>

<p>¿Tienes metas académicas, sueños de viajar por el mundo, o proyectos que necesitan un empujón económico? ¡Entonces estás en el lugar correcto! En Citasconmillonarios.com, creemos en el poder de la comunidad y la solidaridad entre generaciones. Aquí, encontrarás a mentores, amigos y posibles mecenas que están emocionados por ser parte de tu historia de éxito.</p>

<p>Nuestra comunidad es exclusiva para señoritas estudiantes mayores de 18 años que desean un apoyo económico y moral en su viaje hacia el logro de sus sueños. No importa si eres una apasionada de la ciencia, una futura artista o una aventurera nata, en Citasconmillonarios.com te esperan personas que comparten tus intereses y están dispuestas a ayudarte a alcanzar la cima.</p>

<p>¡Únete a nosotros y descubre un mundo lleno de oportunidades! Regístrate hoy mismo en Citasconmillonarios.com y comienza a conectar con personas que creen en ti y en tus metas. ¡El futuro es tuyo para tomar, y estamos aquí para hacerte brillar!</p>

<p>No pierdas más tiempo, ¡tu aventura comienza aquí!</p>

Con cariño, el equipo de citasconmillonarios.com
      
      <h2>Preguntas Frecuentes</h2>
      <div className="faq-item">
        <h3>¿Qué es citasconmillonarios.com?</h3>
        <p>
          Citasconmillonarios.com es una plataforma de citas diseñada para mujeres que desean conocer hombres solventes con la posibilidad de establecer relaciones respetuosas y discretas.
        </p>
      </div>
      <div className="faq-item">
        <h3>¿Quién puede usar la aplicación?</h3>
        <p>
          Para utilizar Citasconmillonarios.com, debes cumplir con los siguientes requisitos:
          <ul>
            <li>Ser mayor de edad.</li>
            <li>Ser estudiante.</li>
            <li>Estar dispuesta a conocer varones respetuosos.</li>
            <li>Tener una foto actual en tu perfil.</li>
          </ul>
        </p>
      </div>
      <div className='faq-item'>
        <h3>¿Cómo funciona la aplicación?</h3>
        <p>
        La aplicación te permite crear un perfil, especificar tus intereses y buscar perfiles de hombres solventes que compartan tus intereses. Puedes iniciar conversaciones y conocer a otras personas de manera discreta y respetuosa.
        </p>
      </div>
      <div className='faq-item'>
        <h3>¿Qué medidas de seguridad y privacidad se han implementado en la aplicación?</h3>
        <p>
        En Citasconmillonarios.com, la seguridad y la privacidad son prioritarias. Hemos implementado medidas de seguridad para proteger tus datos personales y garantizar que las interacciones sean seguras y respetuosas. Puedes denunciar cualquier comportamiento inapropiado.    
        </p>
      </div>
      <div className='faq-item'>
        <h3>¿Cómo puedo verificar la solvencia de los usuarios?</h3>
        <p>
        Citasconmillonarios.com ofrece funciones para verificar la solvencia de los usuarios, como la información financiera que comparten en sus perfiles. Sin embargo, te recomendamos ser cautelosa y utilizar tu propio criterio al interactuar con otros usuarios.    
        </p>
      </div>
      <div className='faq-item'>
        <h3>¿La aplicación garantiza que encontraré una relación exitosa?</h3>
        <p>
        Citasconmillonarios.com no puede garantizar resultados específicos en las relaciones. Sin embargo, proporcionamos una plataforma para que las personas se conozcan y establezcan conexiones significativas.    
        </p>
      </div>
      <div className='faq-item'>
        <h3>¿Qué debo hacer si experimento un comportamiento inapropiado por parte de otro usuario?</h3>
        <p>
        Si experimentas un comportamiento inapropiado, puedes denunciarlo a través de la aplicación. Tomaremos medidas para abordar la situación y garantizar un entorno seguro.
        </p>
      </div>
      <div className='faq-item'>
        <h3>¿Cómo puedo eliminar mi cuenta?</h3>
        <p>Puedes eliminar tu cuenta en cualquier momento desde la configuración de tu perfil. Ten en cuenta que esta acción eliminará permanentemente tu perfil y tus datos de la aplicación.
        </p>
      </div>
      <div className='faq-item'>
        <h3>¿Cómo puedo contactar al soporte de la aplicación si tengo problemas o preguntas adicionales?</h3>
        <p>Si tienes problemas o preguntas adicionales, puedes contactar a nuestro equipo de soporte a través de la sección de ayuda en la aplicación. Estamos aquí para ayudarte en todo momento.
        </p>
      </div>
      <div className='faq-item'>
        <h3>¿Cuál es la política de tarifas de la aplicación?</h3>
        <p>Consulta la sección de tarifas en la aplicación para obtener información sobre los precios y las suscripciones disponibles.
        </p>
      </div>
      <div className='faq-item'>
        <h3></h3>
        <p>
        </p>
      </div>
      <div className='faq-item'>
        <h3></h3>
        <p>
        </p>
      </div>
      {/* Agrega más preguntas y respuestas aquí */}
      <div>
      <Link to="/">
      <FontAwesomeIcon icon={faAngleDoubleLeft} /> Volver
            </Link> {/* Enlace a la página de FAQ */}
      
      </div>
    </div>
  );
};

export default Faq;
