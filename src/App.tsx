import React from 'react';
import logo from './logo.svg';
import './App.css';
import UploadImage from './screens/UploadImage';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UploadImage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
