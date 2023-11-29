import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3 navbarStyle" id="mainNav">
            <div className="container px-4 px-lg-5" >
                <a className="navbar-brand" href="#page-top">소나기</a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                    aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto my-2 my-lg-0">
                        <li className="nav-item"><a className="nav-link" href="#page-top" style={{fontFamily:'SKYBORI', fontSize:23}}>홈</a></li>
                        <li className="nav-item"><a className="nav-link" href="#about" style={{fontFamily:'SKYBORI', fontSize:23}}>소개</a></li>
                        <li className="nav-item"><a className="nav-link" href="#HowTo" style={{fontFamily:'SKYBORI', fontSize:23}}>나눔방법</a></li>
                        <li className="nav-item"><a className="nav-link" href="#ThanksTo" style={{fontFamily:'SKYBORI', fontSize:23}}>고마운 분들</a></li>
                        <li className="nav-item"><a className="nav-link" href="#ListMember" style={{fontFamily:'SKYBORI', fontSize:23}}>참여해주신 분들</a></li>
                        <li className="nav-item"><Link className="nav-link" to="/notice" style={{ fontFamily: 'SKYBORI', fontSize: 23 }}>공지사항 보러가기</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar