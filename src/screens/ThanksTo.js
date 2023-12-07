import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ThanksTo.css'; // CSS 파일 import
import 'aos/dist/aos.css';
import AOS from 'aos';
import classNames from 'classnames';
import givepic1 from '../assets/images/givepic1.jpg'
import givepic2 from '../assets/images/givepic2.jpg'
import givepic3 from '../assets/images/givepic3.jpg'
import givepic4 from '../assets/images/givepic4.jpg'
import givepic5 from '../assets/images/givepic5.jpg'
import sonagithank from '../assets/images/sonagithank.png'




class CitiesSlider extends React.Component {
    constructor(props) {
        super(props);

        this.IMAGE_PARTS = 4;

        this.changeTO = null;
        this.AUTOCHANGE_TIME = 4000;

        this.state = { 
            activeSlide: -1,
            prevSlide: -1, 
            sliderReady: false,
            data: [], 
            selectedData: null
            };
        }

    componentWillUnmount() {
        window.clearTimeout(this.changeTO);
    }

    componentDidMount() {
        this.runAutochangeTO();
        setTimeout(() => {
            this.setState({ activeSlide: 0, sliderReady: true });
        }, 0);

        // 데이터를 불러옵니다.
        axios.get('http://port-0-sonagi-app-project-1drvf2lloka4swg.sel5.cloudtype.app/boot/review/findAll')
        .then(response => {
            console.log(response.data);
            const sortedData = response.data.sort((a, b) => new Date(b.reviewDate) - new Date(a.reviewDate));
            // 받아온 데이터를 저장합니다.
            this.setState({ data: sortedData });
        })
        .catch(error => {
            console.error(error);
        });
    }

    runAutochangeTO() {
        this.changeTO = setTimeout(() => {
            this.changeSlides(1);
            this.runAutochangeTO();
        }, this.AUTOCHANGE_TIME);
    }

    changeSlides(change) {
        window.clearTimeout(this.changeTO);
        const { length } = this.state.data;
        const prevSlide = this.state.activeSlide;
        let activeSlide = prevSlide + change;
        if (activeSlide < 0) activeSlide = length - 1;
        if (activeSlide >= length) activeSlide = 0;
        this.setState({ activeSlide, prevSlide });
        this.runAutochangeTO();
    }
    
    // 모달을 띄울 때 특정 데이터를 선택합니다.
    openModal = (src, index) => {
        this.setState({
            showModal: true,
            modalImage: src,

            // 선택한 데이터를 저장합니다.
            selectedData: this.state.data[index]
        }, () => {
            // 모달이 열릴 때 body 스크롤을 막습니다.
            document.body.style.overflow = 'hidden';
        })
    }

    closeModal = () => {
        this.setState({
            showModal: false,
            modalImage: null,
        }, () => {
            // 모달창이 닫힌 후 body 스크롤을 허용
            document.body.style.overflow = 'unset';
        })
    }



    render() {
        const { activeSlide, prevSlide, sliderReady, selectedData, data  } = this.state;
        return (
            <div className={classNames('slider2', { 's--ready': sliderReady })}>
                <div className="slider__slides">
                    {data.map((slide, index) => (
                        <div
                            className={classNames('slider__slide', { 's--active': activeSlide === index, 's--prev': prevSlide === index })}
                            key={slide.city}
                        >
                            <div className="slider__slide-content">
                                <h3 className="slider__slide-subheading">{slide.regionCategory || slide.regionCategory}</h3>
                                <h2 className="slider__slide-heading">
                                {slide.donator && slide.donator.split('').map(l => <span key={l}>{l}</span>)}
                                </h2>
                                <p className="slider__slide-readmore" onClick={() => this.openModal(slide.reviewImage, index)}>자세히 보기</p>
                            </div>
                            <div className="slider__slide-parts">
                                {[...Array(this.IMAGE_PARTS).fill()].map((x, i) => (
                                    <div className="slider__slide-part" key={i}>
                                        <div className="slider__slide-part-inner" style={{ backgroundImage: `url(${slide.reviewImage})` }} />
                                    </div>
                                ))}
                            </div>

                            {this.state.showModal &&
                                <div className="ttmodal">
                                    <div className="ttmodal-content">
                                        <div className='ttclosediv'>
                                            <span className="ttclose" onClick={this.closeModal}>&times;</span>
                                        </div>
                                        <div>지역 : {selectedData ? selectedData.regionCategory : ''}</div>
                                        <div className='ttline' />
                                        <div style={{ marginBottom: '2%' }}>제목: {selectedData ? selectedData.reviewTitle : ''}</div>
                                        <img src={this.state.modalImage} className='ttmodal-image' />
                                        <div className="ttinfo-row">
                                            <div>To {selectedData ? selectedData.donator : ''}</div>
                                        </div>
                                        <table className="ttinfo-table">
                                            <tr className='ttmodal-info'>
                                                <td className='ttmodal-whiteContain'>
                                                    <div className='ttmodal-white'>
                                                        {selectedData ? selectedData.reviewContext : ''}
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                        
                                        <div style={{ position: 'absolute', left:0, bottom:0, marginLeft: '5%', marginBottom: '2%', paddingTop: '1.5%'  }}>from {selectedData ? selectedData.receiver : ''} </div>
                                        <div style={{ position: 'absolute', right:0, bottom:0, marginRight: '5%', marginBottom: '2%' }}>{selectedData ? selectedData.reviewDate : ''}</div>
                                    </div>
                                </div>
                            }
                        </div>
                    ))}
                </div>
                <div className="slider__control" onClick={() => this.changeSlides(-1)} />
                <div className="slider__control slider__control--right" onClick={() => this.changeSlides(1)} />
            </div>
        );
    }
}

const slides = [
    {
        city: '꿀꾸리 막창',
        country: '서울시 구로구',
        img: givepic1,
    },
    
];

const ThanksTo = () => {

    //const [filterRegion, setFilterRegion] = useState('서울특별시');

    //const regions = ['서울특별시', '인천광역시', '대전광역시', '대구광역시', '울산광역시', '부산광역시', '광주광역시', '경기도', '강원도', '충청도', '경상도', '전라도', '제주도'];



    // const handleRegionChange = (event) => {
    //     setFilterRegion(event.target.value);
    // }

    //const filteredData = data.filter(item => item.regionCategory === filterRegion);

    return (
        <section className="page-section" id="ThanksTo" style={{ height: '890px', paddingTop: 0 }}>
            <img src={sonagithank} alt="Sonagi Thank" style={{ width: '15%', marginLeft: '3.8%', marginTop: '1.5%', marginBottom: '1%' }} />
            <div style={{}}>
                <CitiesSlider slides={slides} />
            </div>

            {/* <div data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" className="scroll-container px-4 px-lg-5" style={{ textAlign: 'center' }}>
                <h1 className="text-center mt-0" style={{ fontFamily: 'SKYBORI', marginBottom: '2%' }}><strong>소나기와 함께하는 항상 고마운 분들이십니다.</strong></h1>

                <select onChange={handleRegionChange} style={{ padding: '10px', fontSize: '16px', borderRadius: '5px' }}>
                    {regions.map((region, index) => (
                        <option key={index} value={region}>{region}</option>
                    ))}
                </select>

                <div style={{ justifyContent: 'center', display: 'flex' }}>
                    <div className="row gx-4 gx-lg-5 scroll-view" style={{ display: 'flex', flexDirection: 'row', overflowX: 'auto', flexWrap: 'nowrap', width: '1500px' }}>

                        {filteredData.length > 0 ? (
                            filteredData.map((item, index) => (
                                <div key={index} style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: '400px',
                                    width: '490px',
                                    backgroundImage: "url('./assets/images/posteat.png')",
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                }}>
                                    <h3 style={{ fontFamily: 'SKYBORI', fontSize: '30px' }}>{item.regionCategory} - {item.receiver}</h3>
                                    <p>작성자: {item.donator}</p>
                                    <p>제목 : {item.reviewTitle}</p>
                                    <p>내용 : {item.reviewContext}</p>
                                    <p>작성일 : {item.reviewDate}</p>
                                </div>
                            ))
                        ) : (
                            <p style={{ display: 'flex', textAlign: 'center', justifyContent: 'center', marginTop: '10%' }}>데이터가 없습니다.</p>
                        )}

                    </div>
                </div>
            </div> */}
        </section>
    );
}

export default ThanksTo;