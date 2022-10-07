import { useState } from "react";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Main from './components/Main';
import ReactDOM from 'react-dom'



ReactDOM.render(
  <App />,
  document.getElementById('root')
);

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
