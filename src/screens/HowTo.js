import React from 'react';
import './HowTo.css';

const HowTo = () => {
    return (
        <section className="page-section bg-dark" id="HowTo">
            <div className="container px-4 px-lg-1" style={{marginTop:-40, marginBottom:-40}}>
                <h2 className="text-center mt-0 text-white">기부방법</h2>
                <hr className="divider" />
                <div className="scroll-container">
                    <div className="row gx-4 gx-lg-3">
                        {/* <img src='../assets/images/123.png'/> */}
                        <div className="col-lg-2 col-md-6 text-center">
                            <div className="mt-5">
                                <div className="mb-2"><i className="bi bi-download fs-1 text-primary"></i></div>
                                <h3 className="h3 mb-2 text-white">1. 앱 다운</h3>
                                <p className="text-muted mb-0" style={{ fontSize: 16 }}>QR 코드를 스캔하거나 앱스토어에서 '소나기' 앱을 다운로드합니다.</p>
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-6 text-center">
                            <div style={{marginTop:100}}><i className="bi bi-arrow-right fs-1 text-primary"></i></div>
                        </div>
                        <div className="col-lg-2 col-md-6 text-center">
                            <div className="mt-5">
                                <div className="mb-2"><i className="bi bi-people-fill fs-1 text-primary"></i></div>
                                <h3 className="h3 mb-2 text-white">2. 회원가입</h3>
                                <p className="text-muted mb-0" style={{ fontSize: 16 }}>'소나기' 앱에서 기부자로 회원가입 진행 후 로그인 합니다.</p>
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-6 text-center">
                            <div style={{marginTop:100}}><i className="bi bi-arrow-right fs-1 text-primary"></i></div>
                        </div>
                        <div className="col-lg-2 col-md-6 text-center">
                            <div className="mt-5">
                                <div className="mb-2"><i className="bi bi-hand-index-thumb-fill fs-1 text-primary"></i></div>
                                <h3 className="h3 mb-2 text-white">3. 기부 클릭</h3>
                                <p className="text-muted mb-0" style={{ fontSize: 16 }}>메인 화면에서 '기부하기' 버튼을 클릭합니다.</p>
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-6 text-center">
                            <div style={{marginTop:100}}><i className="bi bi-arrow-right fs-1 text-primary"></i></div>
                        </div>
                        <div className="col-lg-2 col-md-6 text-center">
                            <div className="mt-5">
                                <div className="mb-2"><i className="bi bi-map-fill fs-1 text-primary"></i></div>
                                <h3 className="h3 mb-2 text-white">4. 등록 클릭</h3>
                                <p className="text-muted mb-0" style={{ fontSize: 16 }}>지도 오른쪽 아래에 있는 '등록' 버튼을 클릭합니다.</p>
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-6 text-center">
                            <div style={{marginTop:100}}><i className="bi bi-arrow-right fs-1 text-primary"></i></div>
                        </div>
                        <div className="col-lg-2 col-md-6 text-center">
                            <div className="mt-5">
                                <div className="mb-2"><i className="bi-heart-fill fs-1 text-primary"></i></div>
                                <h3 className="h3 mb-2 text-white">5. 음식 등록</h3>
                                <p className="text-muted mb-0" style={{ fontSize: 16 }}>기부할 음식과 양을 설정한 후, '확인' 버튼을 눌러 기부 음식을
                                    등록합니다.</p>
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-6 text-center">
                            <div style={{marginTop:100}}><i className="bi bi-arrow-right fs-1 text-primary"></i></div>
                        </div>
                        <div className="col-lg-2 col-md-6 text-center">
                            <div className="mt-5">
                                <div className="mb-2"><i className="bi bi-telephone-fill fs-1 text-primary"></i></div>
                                <h3 className="h3 mb-2 text-white">6. 연락 대기</h3>
                                <p className="text-muted mb-0" style={{ fontSize: 16 }}>음식을 등록한 후 그 음식이 필요한 기부처에서 연락이 올 때까지 기다립니다.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default HowTo;