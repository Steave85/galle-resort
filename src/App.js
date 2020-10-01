import React from 'react';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import ErrorPage from './pages/ErrorPage';
import {Route, Switch} from 'react-router-dom'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs'
import './App.css';

function App() {
  return (
    <>
    <NavBar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/rooms" component={Rooms} />
      <Route exact path="/rooms/:slug" component={SingleRoom} />
      <Route exact path='/about-us' component={AboutUs} />
      <Route exact path='/contact-us' component={ContactUs} />
      <Route component={ErrorPage} />
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
