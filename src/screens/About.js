import React, { useEffect } from 'react';
import './About.css';
import 'aos/dist/aos.css';
import AOS from 'aos';


const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1400
        });
    }, []);
    
    return (
        <section class="page-section bg-primary" id="about" style={{ height: '1100px' }}>
            <div style={{ marginTop: '1%' }}>
            <h2 class="text-white mt-0" data-aos="fade-left" style={{ textAlign: 'center', letterSpacing: '-4px',lineHeight: '1.3' }}>
                <strong style={{ fontFamily: 'PLAYBOLD', color: '#6A6A6A', fontSize: 56, textAlign: 'center', marginBottom: '10%' }}>
                    <strong style={{ fontFamily: 'PLAYBOLD', color: '#44A5FF', fontSize: 56 }}>소나기</strong>의 편리한<br /> 
                </strong>
            </h2>
            <h2 class="text-white mt-0" style={{ textAlign: 'center', letterSpacing: '-4px' }}>
                <strong style={{ fontFamily: 'PLAYBOLD', color: '#6A6A6A', fontSize: 56, textAlign: 'center', marginBottom: '10%'}}>
                    앱 사용을 통해 하지 못했던<br /> 
                    <p style={{ fontFamily: 'PLAYBOLD', color: '#6A6A6A', fontSize: 56, lineHeight: '1.8', letterSpacing: '-4px'   }} data-aos="fade-right" ><strong style={{ fontFamily: 'PLAYBOLD', color: '#44A5FF', fontSize: 56, }}>새로운 기부활동</strong>을 시작해보세요.</p>
                </strong>
            </h2>
            </div>

            <div style={{ marginTop: '0%', lineHeight: '2'}}>
                <p class="text-white mt-0" style={{ textAlign: 'center' }}>
                    <p style={{ fontFamily: 'PLAYREGULAR', color: '#A1A1A1', fontSize: 25, textAlign: 'center' }}>
                        소나기는 중고 거래를 하듯 편리하게<br />
                        음식을 보육원에 기부 할 수 있으며 여건상 어려웠던<br />
                        기부 활동을 손쉽게 할 수 있는 서비스를 제공합니다.
                    </p>
                </p>
            </div>
        </section>
    );
}

export default About;
