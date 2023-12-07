import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
import End from './screens/End';

// 새로고침할때 처음으로 시작하는 코드
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <div style={{ overflow: 'hidden' }}>
            <Navbar />
            <Masthead />
            <About />
            <ThanksTo />
            <HowTo />
            <ListMember />
            <Outlet />
            <End/>
          </div>
        } />
        <Route path="adminWrite" element={<WriteNotice />} />
        <Route path="updateNotice/:textNum" element={<UpdateNotice />} />
        <Route path="/notice" element={
          <div>
            <BoardNotice />
          </div>
        } />
        
      </Routes>
    </Router>
  );
}

export default App;