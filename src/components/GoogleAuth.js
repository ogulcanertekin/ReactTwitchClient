import React from 'react';

class GoogleAuth extends React.Component{           //Google Api - Gapi

    state = {isSignedIn:null};

    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId:
                    '437310296749-fk16m3rael59jmp96m6ms59f6v6cr2ue.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{                                                       //Returns promise so using then right there!
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn:this.auth.isSignedIn.get()})          //isSignedIn - signIn - signOut --> built-in methods in gapi(GoogleApi)    
                this.auth.isSignedIn.listen(this.onAuthChange);                 //sayfayı yenilemeden güncel olarak ekranda kullanıcı login durumunun görünmesi için, built in method-->listen.
            });
        });
    }

    renderAuthButton(){
        if(this.state.isSignedIn===null){
            return <div>I dont know if we are signed in</div>;
        }else if (this.state.isSignedIn){
            return <div>I am signed in</div>
        }else{
            return <div>I am not signed in</div>
        }
    }

    onAuthChange = () => {
        this.setState({isSignedIn:this.auth.isSignedIn.get()})
    };

    render(){
        return <div>{this.renderAuthButton()}</div>
    }
}

/*
    Console-->

    gapi.auth2.getAuthInstance()
    gapi.auth2.getAuthInstance().signIn()
    refresh ! 
*/

export default GoogleAuth;