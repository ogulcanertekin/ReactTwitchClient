import React from 'react';
import ReactDOM from 'react-dom';

//Modal-->reactDOM.createportal --> 1. parametre içerik 2. parametre ise ; html de referans verdigimiz div.
//İstedigimiz componentda tanımlayarak kullanabilecegiz.Dogrudan html e ulasmanın bir yolu...

const Modal = () => {               
    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active">
            <div className="ui standard modal visible active">
                Hi its modal!
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;