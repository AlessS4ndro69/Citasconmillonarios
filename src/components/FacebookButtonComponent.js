import React from 'react';

function FacebookButton({url}) {
  // URL de la página de Facebook a la que quieres redirigir
  
  const toFacebook = () => {
    window.open(url, '_blank');
  };

  return (
    <div>
      {/* El botón con un enlace a la página de Facebook */}
      
        <button onClick={toFacebook}>Ir a Facebook</button>
      
    </div>
  );
}

export default FacebookButton;
