import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

const PageOne = () => {
    return <div>PageOne</div>
};

const PageTwo = () => {
    return(
        <div>
            PageTwo
            <button>Click Me!</button>
        </div>
    ) 
};

const App = () => {                             // Routers --> Include -->/pagetwo includes / so --> <Route path="/" component={PageOne} /> without exact keyword ->this display in /pagetwo... cause its include /
    return (                
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={PageOne} />               
                    <Route path="/pagetwo" component={PageTwo}/>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;