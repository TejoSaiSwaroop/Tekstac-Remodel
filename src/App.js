import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomeView from './views/HomeView/HomeView';
import BoardView from './views/BoardView/BoardView';
import AttendanceView from './views/AttendanceView/AttendanceView';
import HonorHourView from './views/HonorHourView/HonorHourView';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/board/:boardId" element={<BoardView />} />
          <Route path="/attendance" element={<AttendanceView />} />
          <Route path="/honor-hour" element={<HonorHourView />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
