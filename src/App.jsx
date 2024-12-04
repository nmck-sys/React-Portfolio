import { Component } from 'react';
import { Route, Routes } from 'react-router-dom'; 
import Nav from './components/Nav';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

class App extends Component {
  render() {

    return (
      <body>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<About />} /> 
            <Route path="/about" element={<About />} />  
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
      </body>
    );
  }
}

export default App;