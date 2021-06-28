import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';


import Footer from './components/Footer';
import Homepage from './pages/HomePage';
import Aboutpage from './pages/Aboutpage';
import Contactpage from './pages/Contactpage';
import LangoPage from './pages/LangoPage';
import SocialPage from './pages/SocialPage'

import Sandyskull from './assets/images/sandyskull.svg'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Sandcastle',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
        { title: 'Lango', path: '/lango'},
        { title: 'Social', path: '/socials'}
      ],
      home: {
        title: 'Sandcastle',
        subTitle: 'If Pirates Made Psych Rock',
        text: 'Charleston, SC'
      },
      about: {
        title: 'About us',
        subTitle: '..',
      },
      contact: {
        title: 'Contact Us',
        subTitle: '..',
      },
      lango: {
        title: 'Lango',
        subTitle: 'Our first EP'
      },
      social: {
        title: 'Dont be a stranger!',
        subTitle: 'Follow Us!'
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true} style={{ backgroundColor: '#fff792' }}>

          <Navbar className="border-bottom" expand="lg" style={{backgroundColor:'#f9ee9d'}}>

            <Navbar.Brand className="navbar-brand" href="/">
              <img
                alt=""
                src={Sandyskull}
                width=""
                height="50"
                className="align-bottom"
              />
                Sandcastle</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <Homepage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />}></Route>
          <Route path="/about" exact render={() => <Aboutpage title={this.state.about.title} subTitle={this.state.about.subTitle} />}></Route>
          <Route path="/contact" exact render={() => <Contactpage title={this.state.contact.title} subTitle={this.state.contact.subTitle} />}></Route>
          <Route path="/lango" exact render={() => <LangoPage title={this.state.lango.title} subTitle={this.state.lango.subTitle} />}></Route>
          <Route path="/socials" exact render={() => <SocialPage title={this.state.social.title} subTitle={this.state.social.subTitle} />}></Route>

          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;
