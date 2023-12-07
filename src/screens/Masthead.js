import React from 'react';
import './Masthead.css';
import QRCode from 'qrcode.react';
import Map from './Map'; // Map 컴포넌트 import
import facebookImg from '../assets/images/facebook.png';
import instagramImg from '../assets/images/instagram.png';
import twitterImg from '../assets/images/twitter.png';

const Masthead = () => {
    console.log("여기까지 옴");

    return (
        <header className="masthead">
            <div>
                <div className="row gx-4 gx-lg-5 align-items-left justify-content-left text-left"
                    style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ width: '45%', marginRight: 'auto', textAlign:'center' }}>
                        <div className="col-lg-8 align-self-end" style={{ marginTop: '5%', marginLeft:'15%',  }}>
                            <h1 className="text-white font-weight-bold" style={{ fontFamily: 'SKYBORI', fontSize: '2.7rem', width: "110%" }}>
                                소나기가 희망의 <br/><a style={{ fontFamily: 'SKYBORI', color: '#44A5FF', fontSize: '2.7rem'}}>연결망</a>이 되겠습니다.
                            </h1>
                        </div>
                        <div style={{textAlign:'center',marginTop:'3%', marginBottom: '3%'}}>
                            <span className="text-white-75" style={{ marginTop: 20, marginBottom: 15, fontFamily: 'SKYBORI', fontSize: '1.5rem' }}>
                                QR코드를 스캔하면 다운로드 <br></br>페이지로 이동합니다.
                            </span>
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <QRCode value="https://www.naver.com" size={130} bgColor="#524841"
                                fgColor="#FFFFFF" style={{ border: 1, borderRadius: 5 }} />
                        </div>
                    </div>
                    {/* <div style={{ width: '45%', marginLeft: '5%', textAlign: "center", marginTop: "20%" }}>
                        <p style={{ color: 'white', textAlign: "center", fontFamily: 'SKYBORI', fontSize: 30 }}>내 주변에 있는 기부처 한눈에 보기</p>
                        <div style={{ marginLeft: '30%' }}><Map /></div>
                    </div> */}
                </div>
                
                {/* 페이스북, 인스타, 트위터 */}
                <div class="social-icons" style={{ backgroundColor: 'rgba(125, 125, 125, 0.4)', marginLeft: '2%', marginRight: '0%', marginTop: '2%', marginBottom: '2%', paddingLeft: '0.7%', paddingRight: '0.7%', paddingTop: '1.5%', paddingBottom: '0.7%', borderRadius: 16}}>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={facebookImg} alt="facebook" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src={instagramImg} alt="instagram" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src={twitterImg} alt="twitter" />
                    </a>
                </div>
            </div>

            
        </header>
    );
}

export default Masthead;