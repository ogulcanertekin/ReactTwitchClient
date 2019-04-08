import React from 'react';
import {Field, reduxForm} from 'redux-form';            //Field --> User inputs in react redux...Ekranda bir input göstermekten sorumlu degil yalnızca redux tarafındaki store vb işlemleri yapmak için...Bu yüzden component property eklemek gerekiyor.

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

    //REFACTORED With destructing --> (formProps) -> ...formProps.input

    renderInput({input,label}){                             //Field componenta prop gönderebiliyor...//Field yalnızca store işlemlerinden sorumlu...Input prop ile Field propertylerini eslestirmek için->Otomatik olarak Event handlers onChange-value etc...;
        return (
            <div>
                <label>{label}</label>                     
                <input {...input}/>                         {/*  formProps.input --> Tüm propertyleri(event Handlerları-onChange-onClick etc...) eşleştirmesi için... */}
            </div>
        );
    }

    render() {
        //console.log(this.props);
        return(
            <form className="ui form">
                <Field name="title" component={this.renderInput} label="Enter Title"/>          {/* Customizing Form Fields with Sending label Prop */}
                <Field name="description" component={this.renderInput} label="Enter Description"/>
            </form>
        );
    }
};

export default reduxForm({                  // Connect with Redux.
    form:'streamCreate'
})(StreamCreate);