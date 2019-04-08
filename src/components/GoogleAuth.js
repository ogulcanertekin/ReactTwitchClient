import React from 'react';

class GoogleAuth extends React.Component{
    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId:
                    '437310296749-fk16m3rael59jmp96m6ms59f6v6cr2ue.apps.googleusercontent.com',
                scope:'email'
            });
        });
    }

    render(){
        return <div>Google Auth</div>
    }
}

export default GoogleAuth;