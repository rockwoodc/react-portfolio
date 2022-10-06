import { useState } from "react";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ContactForm from "./pages/Contact";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Main from './components/Main'

function App() {
   const [page, setPage]= useState('about')

  return (
    <div>
      <Header setPage={setPage}/>
      <Main page={page}/>
      <Footer />
    </div>
  );
}

export default App;
