import { Container } from '@mui/material';
import React from 'react';
import Login from './components/login';
import Client from './components/client';
import Footer from './components/footer';



function App() {
  return (
    <div>
      <Login/>
      <Client/>
      <Footer/>
    </div>
  );
}

export default App;
