import React from 'react';
import {Router, Route} from 'react-router-dom';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import StreamCreate from './streams/StreamCreate';
import Header from './Header';
import history from '../history';                               //Kullanıcıların hangi sayfaya baktıgını ögrenebilmek ve örn post işleminden sonra programming navigate yapabilmek için gerekli..

const App = () => {                                             //Client-Side Routing!                         
    return (                
        <div className="ui container">               
            <Router history={history}>
                <div>
                    <Header/>                                       {/* Always Visible Component Like Layout */}
                    <Route path="/" exact component={StreamList} />               
                    <Route path="/streams/new" exact component={StreamCreate}/>
                    <Route path="/streams/edit/:id" exact component={StreamEdit}/>
                    <Route path="/streams/delete/:id" exact component={StreamDelete}/>
                    <Route path="/streams/show" exact component={StreamShow}/>
                </div>
            </Router>
        </div>
    );
};

export default App;