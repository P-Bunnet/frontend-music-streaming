import React from 'react';
import logo from './logo.svg';
import './App.css';
import UploadImage from './screens/UploadImage';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import { Login } from './screens/auth/Login';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
