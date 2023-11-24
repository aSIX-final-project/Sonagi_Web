import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import './App.css';
import About from './screens/About';
import HowTo from './screens/HowTo';
import ListMember from './screens/ListMember';
import Masthead from './screens/Masthead';
import Navbar from './screens/Navbar';
import ThanksTo from './screens/ThanksTo';
import BoardNotice from './screens/BoardNotice';
import WriteNotice from './screens/WriteNotice';  // 공지사항 작성 컴포넌트
import UpdateNotice from './screens/UpdateNotice';  // 공지사항 수정 컴포넌트

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div style={{ overflow: 'hidden' }}>
            <Navbar />
            <Masthead />
            <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
              <About />
              <HowTo />
            </div>
            <BoardNotice/>
            <ThanksTo />
            <ListMember />
            <Outlet />

          </div>
        } />
        <Route path="adminWrite" element={<WriteNotice />} />
        <Route path="updateNotice/:textNum" element={<UpdateNotice />} />
      </Routes>
    </Router>
  );
}

export default App;