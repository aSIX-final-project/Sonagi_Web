import React, { useEffect, useState } from 'react';
import './End.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import up from '../assets/images/up.png';

import { TweenMax, Elastic } from 'gsap';
const useTypingEffect = (text, speed) => {
    const [output, setOutput] = useState("");
    useEffect(() => {
      let i = 0;
      const timer = setInterval(() => {
        if (i < text.length) {
          setOutput((prevOutput) => prevOutput + text.charAt(i));
          i++;
        } else {
          setOutput("");
          i = 0;
        }
      }, speed);
      return () => {
        clearInterval(timer);
      };
    }, [text, speed]);
    return output;
  };

const End = () => {
    useEffect(() => {
        AOS.init({
            duration: 3000
        });
    }, []);
    
    const headerText = useTypingEffect("Your header text", 75);
    const [displayBodyText, setDisplayBodyText] = useState(false);
    useEffect(() => {
        const delay = headerText.length * 75 + 75;
        const timer = setTimeout(() => {
        setDisplayBodyText(true);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [headerText]);
  const bodyText = useTypingEffect(displayBodyText ? "따뜻한 마음을 전해보세요." : "", 250);

  useEffect(() => {
    document.querySelectorAll('.button').forEach(button => {
  
      let duration = 0.3; // 0.3초로 줄여서 부드러운 애니메이션으로 설정
      let svg = button.querySelector('svg');
      let svgPath = new Proxy({
        y: null,
        smoothing: null
      }, {
        set(target, key, value) {
          target[key] = value;
          if (target.y !== null && target.smoothing !== null) {
            svg.innerHTML = getPath(target.y, target.smoothing, null);
          }
          return true;
        },
        get(target, key) {
          return target[key];
        }
      });
  
      button.style.setProperty('--duration', duration);
  
      svgPath.y = 20;
      svgPath.smoothing = 0;
  
      button.addEventListener('click', e => {
        e.preventDefault();
  
        if (!button.classList.contains('loading')) {
          button.classList.add('loading');
  
          TweenMax.to(svgPath, duration, {
            smoothing: .3,
            onComplete: () => {
              TweenMax.to(svgPath, duration, {
                y: 12,
                ease: Elastic.easeOut.config(1.12, .4),
                onComplete: () => {
                  setTimeout(() => {
                    svg.innerHTML = getPath(0, 0, [
                      [3, 14],
                      [8, 19],
                      [21, 6]
                    ]);
                  }, duration * 1000 / 2);
                }
              });
            }
          });
        }
      });
    });

    function getPoint(point, i, a, smoothing) {
      let cp = (current, previous, next, reverse) => {
        let p = previous || current,
          n = next || current,
          o = {
            length: Math.sqrt(Math.pow(n[0] - p[0], 2) + Math.pow(n[1] - p[1], 2)),
            angle: Math.atan2(n[1] - p[1], n[0] - p[0])
          },
          angle = o.angle + (reverse ? Math.PI : 0),
          length = o.length * smoothing;
        return [current[0] + Math.cos(angle) * length, current[1] + Math.sin(angle) * length];
      },
        cps = cp(a[i - 1], a[i - 2], point, false),
        cpe = cp(point, a[i - 1], a[i + 1], true);
      return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[1]}`;
    }

    function getPath(update, smoothing, pointsNew) {
      let points = pointsNew ? pointsNew : [
        [4, 12],
        [12, update],
        [20, 12]
      ],
        d = points.reduce((acc, point, i, a) => i === 0 ? `M ${point[0]},${point[1]}` : `${acc} ${getPoint(point, i, a, smoothing)}`, '');
      return `<path d="${d}" />`;
    }
  }, []);
  
    return (
        <section class="page-section bg-primary" id="about" style={{ height: '870px' }}>
            <div style={{ marginTop: '1%', marginLeft: '4%', }}>
                <h2 class="text-white mt-0" style={{ letterSpacing: '-4px', lineHeight: '1.3' }}>
                    <strong style={{ fontFamily: 'PLAYBOLD', color: '#6A6A6A', fontSize: 50, marginBottom: '10%' }}>
                        한번도 볼 수 없었던 <br />
                    </strong>
                </h2>
                <h2 class="text-white mt-0"  style={{ letterSpacing: '-4px' }}>
                    <strong style={{ fontFamily: 'PLAYBOLD', color: '#6A6A6A', fontSize: 50, marginBottom: '10%' }}>
                        새로운 기부 활동을 <strong style={{ color: '#44A5FF', fontFamily: 'PLAYBOLD',fontSize: 50, marginBottom: '10%' }}>소나기</strong> 와 함께<br />
                        <p style={{ fontFamily: 'PLAYBOLD', color: '#6A6A6A', fontSize: 50, lineHeight: '1.8', letterSpacing: '-4px' }}>
                            <strong id="centeralign" style={{ display: displayBodyText ? "inline-block" : "none", fontFamily: 'PLAYBOLD', fontSize: 50, height:100}}>{bodyText}</strong></p>
                    </strong>
                </h2>
                <div>
                    <div className="Endcontainer" style={{ display:'flex', justifyContent : 'start', }}>
                        <a className="button">
                            <ul>
                            <li style={{ fontSize: '23px'}}>다운로드</li>
                            <li style={{ fontSize: '20px'}}>다운로드 중..</li>
                            <li style={{ fontSize: '23px'}}>받기 완료</li>
                            </ul>
                            <div>
                            <svg viewBox="0 0 24 24"></svg>
                            </div>
                        </a>
                        {/* Dribbble link */}
                        <a className="dribbble" href="https://dribbble.com/shots/7299868-Download-Buttons" target="_blank">
                            <img src="https://cdn.dribbble.com/assets/dribbble-ball-mark-2bd45f09c2fb58dbbfb44766d5d1d07c5a12972d602ef8b32204d28fa3dda554.svg" alt="" />
                        </a>
                    </div>
                </div>
            </div>

            <div style={{marginRight: '5%'}}>
                <a href="/" style={{ width: '90%', height: '100%', display:'flex', justifyContent : 'end', marginTop: '10%'}}>
                    <img style={{ width: '70px', height: '90px' }} src={up} alt="upimg" />
                </a>
            </div>

        </section>
    ); 
}

export default End;
