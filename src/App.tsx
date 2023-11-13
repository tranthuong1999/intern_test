import { Container } from '@mui/material';
import React from 'react';
import Login from './components/login';
import Client from './components/client';
import Footer from './components/footer';
import Register from './components/register';




function App() {
  return (
    <div>
      <Login/>
      <Register/>
      <Client/>
      <Footer/>
    </div>
  );
}

export default App;
