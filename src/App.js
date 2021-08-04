import React from 'react'
import {BrowserRouter, Route, Link } from "react-router-dom";

import Home from '../src/Home/Home'
import About from '../src/About/About'
import Contact from '../src/Contact/Contact'
import Header from '../src/Header/Header'
import Body from '../src/body/body'
import Footer from '../src/Footer/Footer'
import Login from '../src/Home/Login/Login'
import Signup from '../src/Home/signup/signup'
import Kids from '../src/Home/kids/kids'
import Man from '../src/Home/man/man'
import Women from '../src/Home/women/women'



class App extends  React.Component{
    render(){
        return(

             <BrowserRouter>
              <Header/>
             <Route exact path="/" component={Home} />
             <Route exact path="/about" component={About} />
             <Route exact path="/contact" component={Contact} />
             <Route exact path="/Login" component={Login} />
             <Route exact path="/signup" component={Signup} />
             <Route exact path="/kids" component={Kids} />
             <Route exact path="/man" component={Man} />
             <Route exact path="/women" component={Women} />
             <Footer/>
             
             </BrowserRouter>
        )
    }
}



export default App;


