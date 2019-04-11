import React from 'react';
import Modal from '../Modal';
import history from '../../history'; //Popup içerisinde arka plana tıklandıgında kullanıcıyı geriye yönlendirmek için.Yani yes or No butonlarına bagımlı etmemek için...

const StreamDelete = () => {

    // JSX ile degisken tanımlarken JS yalnızca bir wrapping blogaa izin veriyor ancak bu stylingi bozuyor...
    // Bu durumu cözmek icin React.Fragment kullanmamız gerekli.Yani bir wrapped element olusturmalıyım ancak div olusturmak istemiyorum.Cünkü semantic-ui icerisinde fazladan div tanımlayınca styling bozuluyor.buttonlar duzgun gozukmuyor...
    // React.fragment herhangi bir html basmaz yalnızca wrapped content olusturarak icerdekileri sibling hale getirir.
    //<> </> seklindede kullanılabilir.
    const actions=(
        <React.Fragment>
            <button className="ui button negative">Delete</button>
            <button className="ui button">Cancel</button>
        </React.Fragment>
    );
        
    return ( 
        <div>
            StreamDelete
            <Modal
                title="Delete Stream"
                content="Are you sure you want to delete this stream ?"
                actions={actions}
                onDismiss={()=>history.push('/')}
            />
        </div>
    );
};

export default StreamDelete;