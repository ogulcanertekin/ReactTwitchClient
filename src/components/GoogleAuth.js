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

    onSignIn = () =>{
        this.auth.signIn();
    }

    onSignOut = () =>{
        this.auth.signOut();
    }

    renderAuthButton(){
        if(this.state.isSignedIn===null){
            return null;
        }else if (this.state.isSignedIn){
            return (
                <button onClick={this.onSignOut} className="ui red google button">
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        }else{
            return (
                <button onClick={this.onSignIn} className="ui red google button">
                    <i className="google icon" />
                    Sign In
                </button>
            );
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