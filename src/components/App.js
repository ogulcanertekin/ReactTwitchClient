import React from 'react';
import {BrowserRouter, Route,Link} from 'react-router-dom';

const PageOne = () => {             // Klasik a(anchor) etiketi kullanmak yerine Link kullanmak, Single Page Applerde sürekli istek yapılmasını önler.Tek bir index.html serve ettigimizden aslında kullanıcı farklı sayfaya gittigini düşünse dahi farklı bir istekte bulunmuyoruz.Yalnızca urli bir componenta baglayıp gösteriyoruz. Ve uygulama içerisindeki state datalarımızın da tekrar ziyaret edildiginde kaybolmamasını saglıyor.Anchor taglar kullanılınca verilere erişimi kaybediyoruz. 
    return(
        <div>
            PageOne
            <br/>
            <Link to="/pagetwo">Navigate to Page Two</Link>
        </div>
    ) 
};

const PageTwo = () => {
    return(
        <div>
            PageTwo
            <br/>
            <Link to="/">Navigate to Page One</Link>
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