import React from 'react';
import { connect } from 'react-redux';

const StreamEdit = (props) => {             //Router(react-router-dom) dan gelen default propertyler ile route parameters yakalanabilir.
    //console.log(props.match.params.id);                      
    return <div>StreamEdit</div>;
};

//mapStateToProps -->For Taking states from redux store...

const mapStateToProps = (state,ownProps) => {       //Component daki route prop ulasmak için, mapstatetoprops özel tanımlı 2. argüman olarak ownProps alıyor.Redux storedan editlenmek istenen idli streame bu sekilde ulasacagız.
    //console.log(ownProps);
    return {stream:state.streams[ownProps.match.params.id]}         
    //Streamleri id leri Key olarak statee kaydettigimiz icin edit ile ilgili streami routedan gelen id ile eşleştirerek redux storedan getirebilirim...
    // -> streams stateleri -> streamList componentdidMount içerisinde fetch ediliyordu.->Ancak bu durumda anasayfaya ugramadan direk /streams/edit/3 dedigimizde akısı göremeyiz.React routerda component isolation yani --> fetch own data kuralı uygulanmalı...
};

export default connect(mapStateToProps)(StreamEdit);