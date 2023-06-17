import './app.css'
import Topbar from './components/topbar/Topbar.jsx'
import Contact from './components/contact/Contact.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx';
import Testimonials from './components/testimonials/Testimonials.jsx';
import Works from './components/works/Works.jsx';
import Intro from './components/intro/Intro.jsx';


function App() {
  return (
    <div className="app">
      <Topbar />
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
