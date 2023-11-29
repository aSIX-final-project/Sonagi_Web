import React, { useEffect } from 'react';
import './HowTo.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { LuDownload } from 'react-icons/lu';
import { BsPeopleFill, BsFillTelephoneInboundFill } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { GiClick } from "react-icons/gi";
import { IoMap } from "react-icons/io5";
import { RiHeartAddFill } from "react-icons/ri";

const HowTo = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);
    return (
        <section className="page-section bg-dark" id="HowTo" style={{ height: '875px' }} >
            <div data-aos="fade-up"
                data-aos-duration="3000" className="container px-4 px-lg-1" style={{ marginTop: -40, marginBottom: -40 }}>
                <div className="scroll-container">
                    <h2 className="text-center mt-0 text-white" ><strong style={{ fontFamily: 'SKYBORI', fontSize: 50 }}>아래와 같은 방법으로 쉽게 나눔을 하실 수 있습니다!</strong></h2>
                    <div className="row gx-4 gx-lg-3" style={{ display: 'flex', justifyContent: 'center', marginTop: '5%' }}>
                        <div className="col-lg-2 col-md-6 text-center">
                            <div className="mt-5">
                                <LuDownload size={70} color="#F4623A" />
                                <h3 className="h3 mb-2 text-white" style={{ fontFamily: 'SKYBORI', fontWeight: 'bold', fontSize: 40, whiteSpace: 'nowrap', marginTop:'3%' }}>1. 어플 다운</h3>
                                <p className="text-muted mb-0" style={{ fontSize: 17 }}><strong>QR 코드를 스캔하거나 앱스토어에서 '소나기' 앱을 다운로드합니다.</strong></p>
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-6 text-center">
                            <div style={{ marginTop: 100 }}><FaArrowRightLong size={50} color="#F4623A" /></div>
                        </div>
                        <div className="col-lg-2 col-md-6 text-center">
                            <div className="mt-5">
                                <BsPeopleFill size={70} color="#F4623A" />
                                <h3 className="mb-2 text-white" style={{ fontFamily: 'SKYBORI', fontWeight: 'bold', fontSize: 40, whiteSpace: 'nowrap', marginTop:'3%' }}>2. 회원 가입</h3>
                                <p className="text-muted mb-0" style={{ fontSize: 17 }}><strong>'소나기' 앱에서 기부자로 회원가입 진행 후 로그인 합니다.</strong></p>
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-6 text-center">
                            <div style={{ marginTop: 100 }}><FaArrowRightLong size={50} color="#F4623A" /></div>
                        </div>
                        <div className="col-lg-2 col-md-6 text-center">
                            <div className="mt-5">
                                <GiClick size={70} color="#F4623A" />
                                <h3 className="h3 mb-2 text-white" style={{ fontFamily: 'SKYBORI', fontWeight: 'bold', fontSize: 40, whiteSpace: 'nowrap', marginTop:'3%' }}>3. 기부 클릭</h3>
                                <p className="text-muted mb-0" style={{ fontSize: 17 }}><strong>메인 화면에서 '기부하기' 버튼을 클릭합니다.</strong></p>
                            </div>
                        </div>

                    </div>

                    <div className="row gx-4 gx-lg-3" style={{ display: 'flex', justifyContent: 'center' }}>


                        <div className="col-lg-2 col-md-6 text-center">
                            <div className="mt-5">
                                <IoMap size={70} color='#F4623A' />
                                <h3 className="h3 mb-2 text-white" style={{ fontFamily: 'SKYBORI', fontWeight: 'bold', fontSize: 40, whiteSpace: 'nowrap', marginTop:'3%' }}>4. 등록 클릭</h3>
                                <p className="text-muted mb-0" style={{ fontSize: 17 }}><strong>지도 오른쪽 아래에 있는 '등록' 버튼을 클릭합니다.</strong></p>
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-6 text-center">
                            <div style={{ marginTop: 100 }}><FaArrowRightLong size={50} color="#F4623A" /></div>
                        </div>
                        <div className="col-lg-2 col-md-6 text-center">
                            <div className="mt-5">
                                <RiHeartAddFill size={70} color='#F4623A' />
                                <h3 className="h3 mb-2 text-white" style={{ fontFamily: 'SKYBORI', fontWeight: 'bold', fontSize: 40, whiteSpace: 'nowrap', marginTop:'3%' }}>5. 음식 등록</h3>
                                <p className="text-muted mb-0" style={{ fontSize: 17 }}><strong>기부할 음식과 양을 설정한 후, '확인' 버튼을 눌러 기부 음식을
                                    등록합니다.</strong></p>
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-6 text-center">
                            <div style={{ marginTop: 100 }}><FaArrowRightLong size={50} color="#F4623A" /></div>
                        </div>
                        <div className="col-lg-2 col-md-6 text-center">
                            <div className="mt-5">
                                <BsFillTelephoneInboundFill size={70} color='#F4623A' />
                                <h3 className="h3 mb-2 text-white" style={{ fontFamily: 'SKYBORI', fontWeight: 'bold', fontSize: 40, whiteSpace: 'nowrap', marginTop:'3%' }}>6. 연락 대기</h3>
                                <p className="text-muted mb-0" style={{ fontSize: 17 }}><strong>음식을 등록한 후 그 음식이 필요한 기부처에서 연락이 올 때까지 기다립니다.</strong></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section >
    );
}

export default HowTo;