import React from 'react';
import {Field, reduxForm} from 'redux-form';            //Field --> User inputs in react redux...Ekranda bir input göstermekten sorumlu degil yalnızca redux tarafındaki store vb işlemleri yapmak için...Bu yüzden component property eklemek gerekiyor.
import {connect} from 'react-redux';
import {createStream} from '../../actions';

class StreamCreate extends React.Component{

    /* //Long Syntax

    renderInput(formProps){                             //Field componenta prop gönderebiliyor...//Field yalnızca store işlemlerinden sorumlu...
        //console.log(formProps);                                 
        return (                                        
            <input 
                onChange={formProps.input.onChange} 
                value={formProps.input.value}
            />
        );
    }

    */

    // Can see automatically created actions and form objects in redux-dev-tools(meaning-->can storing in redux)->State->Tree

    /*Refactored

    renderInput(formProps){                             //Field componenta prop gönderebiliyor...//Field yalnızca store işlemlerinden sorumlu...Input prop ile Field propertylerini eslestirmek için->Event handlers onChange-value etc...;
        return <input {...formProps.input}/>
    }

    */

    //Helper method for errors
    renderError({error,touched}){                       //meta.error ->meta.touched ->destructing . meta içerisinde özel algılayıcı fonks bulunuyor.
        if(touched && error){
            return(
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    //REFACTORED With destructing --> (formProps) -> ...formProps.input

    //meta -->For validation special name.React doing this automatically if validations matches with name property.

    renderInput = ({input, label, meta})=>{                             //Field componenta prop gönderebiliyor...//Field yalnızca store işlemlerinden sorumlu...Input prop ile Field propertylerini eslestirmek için->Otomatik olarak Event handlers onChange-value etc...;
        //console.log(meta);
        const className=`field ${meta.error && meta.touched ? 'error':'' }`                                
        return (
            <div className={className}>
                <label>{label}</label>                     
                <input {...input} autoComplete="off"/>                         {/*  formProps.input --> Tüm propertyleri(event Handlerları-onChange-onClick etc...) eşleştirmesi için... */}
                {this.renderError(meta)}
            </div>
        );
    }

    /*
    onSubmit(event){                    //tek tek onChange dinleyerek form elemanlarını submitde yakalamak yerine form handleSubmit kullanırsak işler kolaylaşıyor;
        event.preventDefault();
        console.log(event.target.title.value);
        console.log(event.target.description.value);
    }
    */

    onSubmit= (formValues) =>{                       //FormValues-> js object with form values... 
        this.props.createStream(formValues);                                        
    }; 

    // Event Obj kullanmak yerine redux-forms built-in callback fonks--> handle submit işleri bizim için kolaylaştırıyor.Fieldlar ile dogrudan verilere ulasabiliyoruz.Event.target.value demek yerine; 

    render() {
        //console.log(this.props);
        return(                                                     
            <form
            onSubmit={this.props.handleSubmit(this.onSubmit)}                               
            className="ui form error"
            >              
                <Field name="title" component={this.renderInput} label="Enter Title"/>          {/* Customizing Form Fields with Sending label Prop */}
                <Field name="description" component={this.renderInput} label="Enter Description"/>
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
};

const validate = (formValues) => {                          //Fonksiyonu exportta redux-forma bagladıktan sonra otomatik olarak fieldlara bakıyor ve burada belirtilen title-description ile eşleşen name propertyleri varsa kontrolu otomatik saglayabiliyor...              
    const errors={};                                        //Field daha sonra bu erroru component da belirtilen fonksiyona meta adlı özel bir parametre ile gönderebiliyor...

    if(!formValues.title){                                  
        errors.title='You must enter a title';
    }

    if(!formValues.description){
        errors.description='You must enter a description';
    }

    return errors;
};

const formWrapped = reduxForm({                  // Connect with Redux.
    form:'streamCreate',
    validate                                //olusturdugumuz validate fonks reduxForm baglıyoruz.
    //validate: validate
})(StreamCreate);

export default connect(null,{createStream})(formWrapped);              //Form baglantısı ve ayrıca, api request icin actiona ulasmak istedigimizden connect ile bağlantı sağlamamız gerekiyor.

//First Argument --> mapStateToProps, second-> ActionCreator...