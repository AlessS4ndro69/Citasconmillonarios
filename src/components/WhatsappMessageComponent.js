import React from 'react';

function WhatsAppMessage({ phoneNumber, message }) {
  const handleClick = () => {
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <button onClick={handleClick}>
      Enviar mensaje a WhatsApp
    </button>
  );
}

export default WhatsAppMessage;
