import './app.css'
import React from 'react';
import Topbar from './components/topbar/Topbar.jsx'
import Contact from './components/contact/Contact.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx';
import Testimonials from './components/testimonials/Testimonials.jsx';
import Intro from './components/intro/Intro.jsx';
import Menu from './components/menu/Menu';
import Works from './components/works/Works';
function App() {

  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className='sections'>
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
