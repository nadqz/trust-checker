import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./routes/Home";
import About from './routes/About';
import FileChecker from './routes/FileChecker';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/filechecker" element={<FileChecker/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
