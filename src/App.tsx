import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import VideoDetailsPage from './Pages/VideoDetailsPage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='/videodetails'
          element={<VideoDetailsPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
