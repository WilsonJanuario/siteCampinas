import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import Headers from './components/Headers/index.js';
import Article from './components/Article/Article';
import Footer from './components/Footer/Footer';
import Routes from './Routes';


import './App.css';

function App(){
  
    return (
      
      <BrowserRouter>
        <Headers />

        <Routes>        </Routes>

       {/* <Article /> */}
        <Footer />
      </BrowserRouter>
      
    );

  }



export default App;
