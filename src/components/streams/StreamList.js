import React from 'react';
import { connect } from 'react-redux';
import {fetchStreams} from '../../actions';

class StreamList extends React.Component {
    
    componentDidMount(){
        this.props.fetchStreams();
    }

    renderList(){
        return this.props.streamz.map(stream=>{
            return(
                <div className="item" key={stream.id}>
                    <i className="large middle aligned icon camera"/>
                    <div className="content">
                        {stream.title}
                        <div className="description">{stream.description}</div>
                    </div>
                </div>
            );
        });
    }

    render() {
        //console.log(this.props.streamz);
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">{this.renderList()}</div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {streamz: Object.values(state.streams)}          // Reducersda stateden bize gelen veri Object tipinde ancak biz burda propertyde bunu mapping ve listeleme işlemlerinin kolay olması için Arraya çevimek istiyoruz.Key olarak Id vermiştik bu objelere...Object.values fonksiyonu state içerisindeki key-value ciftlerinden value leri alarak bir diziye dönüştürür.[{title:"asda",name:"asdas"},{title:"qwewqe",name:"wqeqewqe"}]
};

export default connect(mapStateToProps,{fetchStreams})(StreamList);