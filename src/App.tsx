import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import VideoDetailsPage from './Pages/VideoDetailsPage';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='/videodetails/:postid'
          element={<VideoDetailsPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
