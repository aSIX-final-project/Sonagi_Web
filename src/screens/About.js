import React, { useEffect } from 'react';
import './About.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);
    return (
        <section class="page-section bg-primary" id="about" style={{height:'875px'}}>
            <div data-aos="zoom-out-up" style={{marginTop:'-70px'}}>
                <h2 class="text-white mt-0" style={{ textAlign: 'center' }}><strong style={{ fontFamily: 'SKYBORI', fontSize: 50, textAlign: 'center', marginBottom: '10%' }}>지구 온난화를 줄이고, 나눔으로 연말을 따뜻하게 만들어주세요.</strong></h2>
                <div>
                    <div className="row gx-4 gx-lg-5 align-items-left justify-content-left text-left"
                        style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ width: '45%', marginRight: 'auto', textAlign: 'center' }}>
                            <img src='./assets/images/why3.jpg' style={{ marginTop: '3%', marginLeft: '10%' }}></img>
                        </div>
                        <div style={{ width: '45%', marginLeft: '5%', textAlign: "center", marginTop: "5%" }}>
                            <h2 class="text-white mt-0" style={{ textAlign: 'left', marginLeft: '27%' }}><strong style={{ fontFamily: 'SKYBORI', fontSize: 50, textAlign: 'left', marginBottom: '10%' }}>소개말</strong></h2>
                            <div class="col-lg-8 text-left">
                                <div style={{ justifyContent: 'left', display: 'flex', marginBottom: '2%', marginTop: '10%' }}>
                                    <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" width="30" height="45" viewBox="0 0 18 45" fill="none" >
                                        <path d="M4 13.0557L14 3.61121V41.389" stroke="white" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <p class="text-white-75 mb-4" style={{ marginTop: '1%', marginLeft: '1%', fontWeight: 'bold', fontSize: 25 }}>다양한 이유로 낭비되는 음식들을 나눔으로써 음식물 쓰레기를 줄이고, 도움이 필요한 사람에게 도움을 줄 수 있습니다.</p>
                                </div>
                                <div style={{ justifyContent: 'left', display: 'flex' }}>
                                    <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" width="50" height="45" viewBox="0 0 28 45" fill="none">
                                        <path d="M4 3.61121H19C20.3261 3.61121 21.5979 4.10873 22.5355 4.99431C23.4732 5.8799 24 7.08102 24 8.33343V17.7779C24 19.0303 23.4732 20.2314 22.5355 21.117C21.5979 22.0026 20.3261 22.5001 19 22.5001H9C7.67392 22.5001 6.40215 22.9976 5.46447 23.8832C4.52679 24.7688 4 25.9699 4 27.2223V36.6668C4 37.9192 4.52679 39.1203 5.46447 40.0059C6.40215 40.8915 7.67392 41.389 9 41.389H24" stroke="white" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <p class="text-white-75 mb-5" style={{ fontWeight: 'bold', fontSize: 25 }}>소상공인분들이 휴대폰 앱을 사용하여 쉽고 빠르게 음식을 나눔할 수 있습니다.</p>
                                </div>
                                <div style={{ justifyContent: 'left', display: 'flex', marginTop: '-10px' }}>
                                    <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" width="60" height="45" viewBox="0 0 28 45" fill="none">
                                        <path d="M4 8.33331C4 7.0809 4.52679 5.87978 5.46447 4.99419C6.40215 4.1086 7.67392 3.61108 9 3.61108H19C20.3261 3.61108 21.5979 4.1086 22.5355 4.99419C23.4732 5.87978 24 7.0809 24 8.33331V17.7778C24 19.0302 23.4732 20.2313 22.5355 21.1169C21.5979 22.0025 20.3261 22.5 19 22.5M19 22.5H9M19 22.5C20.3261 22.5 21.5979 22.9975 22.5355 23.8831C23.4732 24.7687 24 25.9698 24 27.2222V36.6666C24 37.9191 23.4732 39.1202 22.5355 40.0058C21.5979 40.8913 20.3261 41.3889 19 41.3889H9C7.67392 41.3889 6.40215 40.8913 5.46447 40.0058C4.52679 39.1202 4 37.9191 4 36.6666" stroke="white" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <p class="text-white-75 mb-5" style={{ fontWeight: 'bold', fontSize: 25 }}>소상공인의 음식물 낭비를 줄이고 선한 영향력을 발휘하여 나눔 인증 스티커를 발급받을 수 있습니다.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;