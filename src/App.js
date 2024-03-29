import React, { Fragment, useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AutocompleteHook from './components/AutocompleteHook'
import Home from './components/Home';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Panier from './components/Panier';
import Messagerie from './components/Messagerie';
import Form from './components/Form';
import Photos from './components/Photos';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import bhdmobile from './assets/dean-design-mobile.png'
import Burger from './components/Burger/Burger';
import Menu from './components/Menu/Menu';
import Exercice from './components/Exercice';
import Footer from './components/Footer';
import Timer from './components/Timer';
import Portfolio from './components/Portfolio';
import Calculator from './components/Calculator';
import Javareact from './components/Javareact';
import MaxMin from './components/MaxMin';
import Circle from './components/Circle';


const App = () => {

  const [isSticky, setSticky] = useState(false); // ce state est un boolean qui va changer de valeur en fonction si on doit rendre le header sticky ou non (en fonction de la position par rapport à l'écran)
  const [open, setOpen] = useState(false)
  const stickyHeaderRef = useRef(null);
  const handleScroll = () => {
    if (stickyHeaderRef.current) {
      setSticky(stickyHeaderRef.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // ça appelle la fonction handleScroll à chaque fois que l'utilisateur fait un scroll sur l'écran du navigateur. Une fois que ce composant est chargé, on execute ce code-là.
  }, []); // crochets signifie que ça ne s'execute qu'une seule fois

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <div className={`sticky-wrapper ${isSticky ? 'sticky' : ''}`} ref={stickyHeaderRef}>
            <Header />
          </div>
          <div className="container">
            <Burger open={open} setOpen={setOpen} />
            <Link style={{ textDecoration: "none" }} to="/"><img className="mobile-logo" src={bhdmobile} alt="Logo" height="" width="255" style={{ marginLeft: "62px" }} /></Link>
            <Menu open={open} setOpen={setOpen} />
          </div>
          {/* A Switch looks through its children Routes and
            renders the first one that matches the current URL. */}
          <Switch>

            <Route path="/circle" component={Circle} />
            <Route path="/maxmin" component={MaxMin} />
            <Route path="/javareact" component={Javareact} />
            <Route path="/calculator" component={Calculator} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/exercice" component={Exercice} />
            <Route path="/timer" component={Timer} />
            <Route path="/form" component={Form} />
            <Route path="/messagerie" component={Messagerie} />
            <Route path="/panier" component={Panier} />
            <Route path="/songs" component={AutocompleteHook} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/photos" component={Photos} />
            <Route path="/" component={Home} /> {/* on met toujours la route par défaut à la fin */}

          </Switch>

          <Footer />
        </div>
      </Router>
    </ThemeProvider>

  );
};

export default App;
