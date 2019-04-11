import React from 'react';
import {connect} from 'react-redux';
import Modal from '../Modal';
import history from '../../history';            //Popup içerisinde arka plana tıklandıgında kullanıcıyı geriye yönlendirmek için.Yani yes or No butonlarına bagımlı etmemek için...
import {fetchStream} from '../../actions';      // Kendi datasını fetch etmeli...


class StreamDelete extends React.Component{

    componentDidMount(){
        //console.log(this.props.match.params.id);          // React-router parametreyi prop olarak gonderebiliyordu...
        this.props.fetchStream(this.props.match.params.id);
    }

    // JSX ile degisken tanımlarken JS yalnızca bir wrapping blogaa izin veriyor ancak bu stylingi bozuyor...
    // Bu durumu cözmek icin React.Fragment kullanmamız gerekli.Yani bir wrapped element olusturmalıyım ancak div olusturmak istemiyorum.Cünkü semantic-ui icerisinde fazladan div tanımlayınca styling bozuluyor.buttonlar duzgun gozukmuyor...
    // React.fragment herhangi bir html basmaz yalnızca wrapped content olusturarak icerdekileri sibling hale getirir.
    //<> </> seklindede kullanılabilir.
    
    renderActions(){
        return(
            <React.Fragment>
                <button className="ui button negative">Delete</button>
                <button className="ui button">Cancel</button>
            </React.Fragment>
        );
    } 
    
    render(){
        return ( 
            <div>
                StreamDelete
                <Modal
                    title="Delete Stream"
                    content="Are you sure you want to delete this stream ?"
                    actions={this.renderActions()}
                    onDismiss={()=>history.push('/')}
                />
            </div>
        );
    }
}

export default connect(null,{fetchStream}) (StreamDelete);