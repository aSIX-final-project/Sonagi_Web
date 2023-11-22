import React from 'react';
import './About.css';

//기관 소개 페이지
const About = () => {
    return (
        <section class="page-section bg-primary" id="about">
            <div class="container px-4 px-lg-5" >
                <div class="row gx-4 gx-lg-5 justify-content-center" style={{marginTop:'10%'}}>
                    <div class="col-lg-8 text-left">
                        <h2 class="text-white mt-0"><strong style={{fontFamily:'SKYBORI', fontSize:50, textAlign:'center', marginBottom:'10%'}}>기관 소개</strong></h2>
                        <hr className="hr-long" />
                        <div style={{ justifyContent: 'left', display: 'flex', marginBottom: '2%', marginTop:'10%' }}>
                            <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" width="30" height="45" viewBox="0 0 18 45" fill="none" >
                                <path d="M4 13.0557L14 3.61121V41.389" stroke="white" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p class="text-white-75 mb-4" style={{marginTop:'1%', marginLeft:'1%', fontWeight:'bold', fontSize:25}}>절차가 간편한 음식 기부 활동을 진행할 수 있습니다.</p>
                        </div>
                        <div style={{ justifyContent: 'left', display: 'flex' }}>
                            <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" width="50" height="45" viewBox="0 0 28 45" fill="none">
                                <path d="M4 3.61121H19C20.3261 3.61121 21.5979 4.10873 22.5355 4.99431C23.4732 5.8799 24 7.08102 24 8.33343V17.7779C24 19.0303 23.4732 20.2314 22.5355 21.117C21.5979 22.0026 20.3261 22.5001 19 22.5001H9C7.67392 22.5001 6.40215 22.9976 5.46447 23.8832C4.52679 24.7688 4 25.9699 4 27.2223V36.6668C4 37.9192 4.52679 39.1203 5.46447 40.0059C6.40215 40.8915 7.67392 41.389 9 41.389H24" stroke="white" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p class="text-white-75 mb-4" style={{fontWeight:'bold', fontSize:25}}>휴대폰 앱을 사용하여 쉽고 빠르고 간편하게 기부 활동을 할 수 있습니다.</p>
                        </div>
                        <div style={{ justifyContent: 'left', display: 'flex' }}>
                            <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" width="60" height="45" viewBox="0 0 28 45" fill="none">
                                <path d="M4 8.33331C4 7.0809 4.52679 5.87978 5.46447 4.99419C6.40215 4.1086 7.67392 3.61108 9 3.61108H19C20.3261 3.61108 21.5979 4.1086 22.5355 4.99419C23.4732 5.87978 24 7.0809 24 8.33331V17.7778C24 19.0302 23.4732 20.2313 22.5355 21.1169C21.5979 22.0025 20.3261 22.5 19 22.5M19 22.5H9M19 22.5C20.3261 22.5 21.5979 22.9975 22.5355 23.8831C23.4732 24.7687 24 25.9698 24 27.2222V36.6666C24 37.9191 23.4732 39.1202 22.5355 40.0058C21.5979 40.8913 20.3261 41.3889 19 41.3889H9C7.67392 41.3889 6.40215 40.8913 5.46447 40.0058C4.52679 39.1202 4 37.9191 4 36.6666" stroke="white" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p class="text-white-75 mb-5" style={{fontWeight:'bold', fontSize:25}}>소상공인의 음식물 낭비를 줄이고 선한 영향력을 발휘하여 기부 인증 스티커를 발급받을 수 있습니다.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;