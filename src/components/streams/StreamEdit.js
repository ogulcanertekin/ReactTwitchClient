import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import {fetchStream,editStream} from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {           //Router(react-router-dom) dan gelen default propertyler ile route parameters yakalanabilir.

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        console.log(formValues);
    };

    render(){
        //console.log(this.props);

        if(!this.props.stream){
            return <div>Loading...</div>
        }

        // Edit formunda formun içerisine InitialValues yollamak için ... redux form içerisinde özel olan prop initialValuesi yolluyoruz...StreamForm redux-form ile olusturulmustu...StreamForm-Redux Form --> Field nameler ile eşleşmeli gonderdigimiz valueler...
        //this.props.stream denildiginde otomatik eslesebilir, veya,
        //initialValues={{title:this.props.stream.title, description:{this.props.stream.description}}} veya Lodash pick fonks ile seçim yapılabilir...        
        //Ancak ilk durumda --> console.log(formValues) de id ve userid bilgileri de yer alır bunun nedeni;
        //Bizim forma baslangıcta güncellenecek veriler dısında da tüm stream verisini göndermemizden kaynaklanır...devtoolsda Streamform values incelendiginde bu veriler de gözüküyor.Bunun nedeni biz gönderdigimiz de formun id ve userid degerlerine de sahip olması gerektigini düşünmesidir.
        
        return (        
            <div>
                <h3>Edit a stream</h3>  
                <StreamForm 
                    initialValues={_.pick(this.props.stream,'title','description')}
                    onSubmit={this.onSubmit} 
                />
            </div>
        );
    } 
};

//mapStateToProps -->For Taking states from redux store...

const mapStateToProps = (state,ownProps) => {       //Component daki route prop ulasmak için, mapstatetoprops özel tanımlı 2. argüman olarak ownProps alıyor.Redux storedan editlenmek istenen idli streame bu sekilde ulasacagız.
    //console.log(ownProps);
    return {stream:state.streams[ownProps.match.params.id]}         
    //Streamleri id leri Key olarak statee kaydettigimiz icin edit ile ilgili streami routedan gelen id ile eşleştirerek redux storedan getirebilirim...
    // -> streams stateleri -> streamList componentdidMount içerisinde fetch ediliyordu.->Ancak bu durumda anasayfaya ugramadan direk /streams/edit/3 dedigimizde akısı göremeyiz.React routerda component isolation yani --> fetch own data kuralı uygulanmalı...
};

export default connect(mapStateToProps,{fetchStream,editStream})(StreamEdit);

//Edit Stream action creator & fetchStream ActionCreators..