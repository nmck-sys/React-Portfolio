import { Component } from 'react';
import { Route, Routes } from 'react-router-dom'; 
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
  render() {

    return (
      <body>
        <Header></Header>
        <main>
          <Routes>
            <Route path="/" element={<About />} /> 
            <Route path="/about" element={<About />} />  
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer></Footer>
      </body>
    );
  }
}

export default App;