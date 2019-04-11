import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';           //Popup içerisinde arka plana tıklandıgında kullanıcıyı geriye yönlendirmek için.Yani yes or No butonlarına bagımlı etmemek için...

//Modal-->reactDOM.createportal --> 1. parametre içerik 2. parametre ise ; html de referans verdigimiz div.
//İstedigimiz componentda tanımlayarak kullanabilecegiz.Dogrudan html e ulasmanın bir yolu...
//Arka plandaki dive atanılan onClick özelliginin default js ile gelen bubbling --> alttki divlere geçme
//öz durdurmak için içerdeki divlere --> stopPropagation öz atıyoruz ki ; yalnızca arka plana tıklandıgında navigate işlemi yapılsın.

const Modal = () => {               
    return ReactDOM.createPortal(
        <div 
            onClick={()=>history.push('/')}
            className="ui dimmer modals visible active"
        >
            <div 
                onClick={(e)=>e.stopPropagation()}
                className="ui standard modal visible active"
            >
                <div className="header">Delete Stream</div>
                <div className="content">
                    Are you sure you want to delete this stream? 
                </div>
                <div className="actions">
                    <button className="ui primary button">Delete</button>
                    <button className="ui button">Cancel</button>
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;