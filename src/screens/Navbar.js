import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import mainlogo from '../assets/images/mainlogo.png';
import aboutlogo from '../assets/images/sonagi2.png';

const Navbar = () => {
    const [logo, setLogo] = useState(mainlogo);
    // 초기 화면빼고 다른 화면에서는 로고가 다른걸로 변경되는 코드
    const location = useLocation();
    

    useEffect(() => {
        setLogo(location.hash === "#page-top" || location.hash === "" ? mainlogo : aboutlogo);
    }, [location]);

    // 스크롤 했을때 로고가 변경되는 코드
    const checkScrollPosition = () => {
        const aboutSection = document.getElementById('about');
        const aboutPosition = aboutSection ? aboutSection.getBoundingClientRect().top : 0;
        if (aboutPosition <= 115) { // 'about' 섹션에 도달했을 때
            setLogo(aboutlogo);
        } else {
            setLogo(mainlogo);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', checkScrollPosition);
        return () => {
            window.removeEventListener('scroll', checkScrollPosition);
        }
    }, []);

    

    const logoSize = logo === aboutlogo ? '30%' : '50%'; // 로고 이미지 크기 설정

    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3 navbarStyle" id="mainNav" style={{}}>
            <a className="navbar-brand" href="#page-top" style={{ width: '18%', marginLeft: '4%' }}>
                <img src={logo} alt="소나기 로고" style={{ width: logoSize, height: logoSize }} /> {/* 로고 이미지 */}
            </a>
            <div className="container px-4 px-lg-5" style={{ marginRight: '0%' }}>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                    aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto my-2 my-lg-0">
                        <li className="nav-item"><a className="nav-link" href="#page-top" style={{ fontFamily: 'SKYBORI', fontSize: 23 }}>홈</a></li>
                        <li className="nav-item"><a className="nav-link" href="#about" style={{ fontFamily: 'SKYBORI', fontSize: 23 }}>소개</a></li>
                        <li className="nav-item"><a className="nav-link" href="#ThanksTo" style={{ fontFamily: 'SKYBORI', fontSize: 23 }}>고마운 분들</a></li>
                        <li className="nav-item"><a className="nav-link" href="#HowTo" style={{ fontFamily: 'SKYBORI', fontSize: 23 }}>나눔방법</a></li>
                        <li className="nav-item"><a className="nav-link" href="#ListMember" style={{ fontFamily: 'SKYBORI', fontSize: 23 }}>참여해주신 분들</a></li>
                        <li className="nav-item"><Link className="nav-link" to="/notice" style={{ fontFamily: 'SKYBORI', fontSize: 23 }}>공지사항 보러가기 <FaArrowUpRightFromSquare size={15} /></Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar