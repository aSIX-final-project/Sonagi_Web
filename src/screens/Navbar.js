import React from 'react';
import './Navbar.css';

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
                        <li className="nav-item"><a className="nav-link" href="#about" style={{fontFamily:'SKYBORI', fontSize:23}}>소개 및 기부방법</a></li>
                        <li className="nav-item"><a className="nav-link" href="#BoardNotice" style={{fontFamily:'SKYBORI', fontSize:23}}>공지사항</a></li>
                        <li className="nav-item"><a className="nav-link" href="#ThanksTo" style={{fontFamily:'SKYBORI', fontSize:23}}>고마운 분들</a></li>
                        <li className="nav-item"><a className="nav-link" href="#ListMember" style={{fontFamily:'SKYBORI', fontSize:23}}>참여한 분들</a></li>
                        <li className="nav-item"><a className="nav-link" href="#Question" style={{fontFamily:'SKYBORI', fontSize:23}}>문의하기</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar