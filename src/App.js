import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects'
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <Projects></Projects>
        <ContactForm></ContactForm>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
