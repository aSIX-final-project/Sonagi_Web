import React, { useEffect, useRef } from 'react';
import './HowTo.css';
import pic1 from '../assets/images/appdownload.png'
import pic2 from '../assets/images/next.png'
import pic3 from '../assets/images/signup.png'
import pic4 from '../assets/images/giveclick.png'
import pic5 from '../assets/images/addclick.png'
import pic6 from '../assets/images/addfood.png'
import pic7 from '../assets/images/call.png'
import pic8 from '../assets/images/white.png'


export default function HowTo() {
    const sliderContainer = useRef(null);
    const images = [pic8, pic1, pic2, pic3, pic2, pic4, pic2, pic5, pic2, pic6, pic2, pic7, pic8];
    const slider = useRef(null);
    useEffect(() => {
        slider.current = new InfiniteSlider(29000, sliderContainer.current);  // slider 객체를 생성하여 ref에 할당합니다.
        slider.current.animate();

        // 계속 중첩되는 useEffect 훅 중지시키는 코드
        return () => {
            slider.current.halt();  // 애니메이션을 정지합니다.
        };
    }, []);

    return (
        <div id="HowTo">
            <div id="slider-container" ref={sliderContainer}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '0%', width: '100%', height: '60%', borderTop: '1px solid #AAAAAA', borderBottom: '1px solid #AAAAAA'}}>
                    <div className="slider">
                        {images.map((imgSrc, index) => (
                            <span key={index}><img src={imgSrc} alt="" className={`img${index + 1}`} /></span>
                        ))}
                    </div>
                </div>
                <div style={{ width: '100%', height: '0%' }}>
                    <div style={{ textAlign: 'center' }}
                        onMouseEnter={() => slider.current && slider.current.halt()}
                        onMouseLeave={() => slider.current && slider.current.go()}>
                        <div>슬라이드를 정지하려면 이부분에 마우스를 올리세요.</div>
                    </div>
                </div>

            </div>
        </div>

    );
}

class InfiniteSlider {
    constructor(animTime = '10000', container) {
        this.slider = container.querySelector('.slider');
        this.container = container;
        this.width = 0;
        this.oldWidth = 0;
        this.duration = parseInt(animTime);
        this.start = 0;
        this.refresh = 0;
        this._prevStop = false;
        this._stop = false;
        this._oldTimestamp = 0;
    }

    animate() {
        const imgs = Array.prototype.slice.call(this.slider.querySelectorAll('img')).
            filter(img => {
                return img.naturalWidth === 0;
            });

        if (imgs.length > 0) {
            window.requestAnimationFrame(this.animate.bind(this));
            return;
        }

        this.oldWidth = this.slider.offsetWidth;
        const sliderText = this.slider.innerHTML;  // slider-extra 클래스를 제거했습니다.
        this.slider.innerHTML += '<span class="slider-extra">' + sliderText + '</span>';  // 처음부터 모든 이미지를 두 번 붙입니다.

        this.width = this.slider.offsetWidth;

        window.requestAnimationFrame(this.controlAnimation.bind(this));
    }

    halt() {
        this._stop = true;
        this._prevStop = false;
    }

    go() {
        this._stop = false;
        this._prevStop = true;
    }

    controlAnimation(timestamp) {
        if (this._stop === true) {
            if (this._prevStop === false) {
                this.slider.style.marginLeft = getComputedStyle(this.slider).marginLeft;
                this._prevStop = true;
                this._oldTimestamp = timestamp;
            }
        } else if (this._stop === false && this._prevStop === true) {
            this._prevStop = false;
            this.start = this.start + (timestamp - this._oldTimestamp);
        } else {
            if (this.refresh >= 1) {
                this.start = timestamp;
                this.slider.style.marginLeft = 0;  // 이 부분을 수정합니다.
                this.refresh = 0;
                window.requestAnimationFrame(this.controlAnimation.bind(this));
                return;
            }
            if (timestamp - this.start >= this.duration) {
                this.refresh = 1;
            }

            const perc = (timestamp - this.start) / this.duration * this.oldWidth;
            this.slider.style.marginLeft = -perc + 'px';
        }
        window.requestAnimationFrame(this.controlAnimation.bind(this));
        return;
    }

}

