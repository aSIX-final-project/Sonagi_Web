import React from 'react';
import './Masthead.css';
import QRCode from 'qrcode.react';
import Map from './Map'; // Map 컴포넌트 import

const Masthead = () => {
    console.log("여기까지 옴");

    return (
        <header className="masthead">
            <div>
                <div className="row gx-4 gx-lg-5 align-items-left justify-content-left text-left"
                    style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ width: '45%', marginRight: 'auto', textAlign:'center' }}>
                        <div className="col-lg-8 align-self-end" style={{ marginTop: '18%', marginLeft:'15%' }}>
                            <h1 className="text-white font-weight-bold" style={{ fontFamily: 'SKYBORI', fontSize: 75, width: "110%" }}>
                                소나기가 희망의 <br></br>연결망이 되겠습니다.
                            </h1>
                        </div>
                        <div style={{textAlign:'center',marginTop:'3%', marginBottom:'3%'}}>
                            <span className="text-white-75" style={{ marginTop: 20, marginBottom: 15, fontWeight: 'bold', fontFamily: 'SKYBORI', fontSize: 30 }}>
                                QR코드를 스캔하면 다운로드 <br></br>페이지로 이동합니다.
                            </span>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <QRCode value="https://www.naver.com" size={130} bgColor="#524841"
                                fgColor="#FFFFFF" style={{ border: 1, borderRadius: 5 }} />
                        </div>
                    </div>
                    <div style={{ width: '45%', marginLeft: '5%', textAlign: "center", marginTop: "20%" }}>
                        <p style={{ color: 'white', textAlign: "center", fontFamily: 'SKYBORI', fontSize: 30 }}>내 주변에 있는 기부처 한눈에 보기</p>
                        <div style={{ marginLeft: '30%' }}><Map /></div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Masthead;