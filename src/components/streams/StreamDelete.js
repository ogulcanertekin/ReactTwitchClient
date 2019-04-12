import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';            //Popup içerisinde arka plana tıklandıgında kullanıcıyı geriye yönlendirmek için.Yani yes or No butonlarına bagımlı etmemek için...
import {fetchStream,deleteStream} from '../../actions';      // Kendi datasını fetch etmeli...


class StreamDelete extends React.Component{

    componentDidMount(){
        //console.log(this.props.match.params.id);          // React-router parametreyi prop olarak gonderebiliyordu...
        this.props.fetchStream(this.props.match.params.id);
    }

    // JSX ile degisken tanımlarken JS yalnızca bir wrapping blogaa izin veriyor ancak bu stylingi bozuyor...
    // Bu durumu cözmek icin React.Fragment kullanmamız gerekli.Yani bir wrapped element olusturmalıyım ancak div olusturmak istemiyorum.Cünkü semantic-ui icerisinde fazladan div tanımlayınca styling bozuluyor.buttonlar duzgun gozukmuyor...
    // React.fragment herhangi bir html basmaz yalnızca wrapped content olusturarak icerdekileri sibling hale getirir.
    //<> </> seklindede kullanılabilir.
    
    // () = > callback olarak kullanılmalı deleteStream...
    renderActions(){

        const id = this.props.match.params.id;

        return(
            <React.Fragment>
                <button onClick={() => this.props.deleteStream(id)} className="ui button negative">Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
        );
    } 
    
    renderContent(){
        if(!this.props.stream){             //Stream henuz yuklenmediyse...
            return 'Are you sure you want to delete this stream?'
        }

        return `Are you sure you want to delete the stream with title: ${this.props.stream.title} ?`
    }

    render(){
        return ( 
            <Modal
                title="Delete Stream"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={()=>history.push('/')}
            />
        );
    }
}

const mapStateToProps = (state,ownProps) => {
    return { stream: state.streams[ownProps.match.params.id]}               //Redux Storeda kayıtlı olan streamlerden, ownProps(special argumant for mapstateToProps)(routedan aldıgımız prop kullanarak) aracılıgıyla silinmek üzere olana key ile erişmek...
};

export default connect(mapStateToProps,{fetchStream,deleteStream}) (StreamDelete);