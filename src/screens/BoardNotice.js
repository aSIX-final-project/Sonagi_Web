import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import './BoardNotice.css';

const BoardNotice = () => {

    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [selectedItem, setSelectedItem] = useState(null);
    const itemsPerPage = 6;
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        axios.get('http://port-0-sonagi-app-project-1drvf2lloka4swg.sel5.cloudtype.app/boot/notice/findAll')
            .then(response => {
                const sortedData = response.data.sort((a, b) => new Date(b.noticeDate) - new Date(a.noticeDate));
                setData(sortedData);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 700
        });
    }, []);

    // 모달창 생성
    const openModal = async (item) => {
        try {
            // Fetch additional details for the selected item using its ID or any unique identifier
            const detailsResponse = await axios.get(`http://port-0-sonagi-app-project-1drvf2lloka4swg.sel5.cloudtype.app/boot/notice/findAll`);
            const details = detailsResponse.data;

            // Update the selected item with additional details
            setSelectedItem({ ...item, details });
            setShowModal(true);
            document.body.style.overflow = 'hidden';
        } catch (error) {
            console.error(error);
        }
    };

    const closeModal = () => {
        setShowModal(false);
        document.body.style.overflow = 'unset';
    }

    const handleClickNext = () => {
        if (page < Math.ceil(data.length / itemsPerPage)) {
            setPage(page + 1);
        }
    }

    const handleClickPrev = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    }

    const handlePageClick = (pageNumber) => {
        setPage(pageNumber);
    }

    return (
        <section className="page-section" id="BoardNotice" style={{ backgroundColor: '', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '1000px', marginBottom:'20%' }}>


            <div style={{ width: '100%' }}>
                <div>
                    <div className="header">
                        <div className="inner-header flex">
                            <svg
                                version="1.1"
                                className="logo"
                                baseProfile="tiny"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 500 500"
                                xmlSpace="preserve"
                            >
                                <path fill="#FFFFFF" stroke="#000000" strokeWidth="10" strokeMiterlimit="10" d="M57,283" />

                            </svg>
                        </div>
                        <div>
                            <svg
                                className="waves"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 24 150 28"
                                preserveAspectRatio="none"
                                shapeRendering="auto"
                            >
                                <defs>
                                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                                </defs>
                                <g className="parallax">
                                    <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                                    <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                                    <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                                    <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className="content2 flex">
                        <div class="container2">
                            <div class="chevron"></div>
                            <div class="chevron"></div>
                            <div class="chevron"></div>
                            <span class="text2">Scroll down</span>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-in" data-aos-anchor-placement="bottom-bottom" className="scroll-container px-4 px-lg-5" style={{ textAlign: 'center', width: '100%', marginTop: '20%', marginBottom: '3%' }}>


                    <div id="container">
                        <h1 className="text-center mt-0" style={{ width: '40%', fontFamily: 'SKYBORI', fontSize: 50, marginRight: '65%', }}><strong>공지사항</strong></h1>
                        <Link className="nav-link2" to="/" >
                            <button class="learn-more">
                                <span class="circle" aria-hidden="true">
                                    <span class="icon arrow"></span>
                                </span>
                                <span class="button-text">뒤로가기</span>
                            </button>
                        </Link>
                    </div>
                    <table style={{ width: '100%', textAlign: 'center', marginTop: '3%' }}>
                        <thead style={{ borderBottom: '2px solid #AAAAAA' }}>
                            <tr>
                                <th style={{ fontFamily: 'SKYBORI', fontWeight: 'bold', fontSize: '25px' }}>번호</th>
                                <th style={{ fontFamily: 'SKYBORI', fontWeight: 'bold', fontSize: '25px' }}>제목</th>
                                <th style={{ fontFamily: 'SKYBORI', fontWeight: 'bold', fontSize: '25px' }}>작성일</th>
                            </tr>
                        </thead>
                        <tbody style={{ height: '80px', width: '100%'}}>
                            {data && data.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((item, index) => (
                                <tr key={index}>
                                    <td><div style={{ fontFamily: 'SKYBORI', fontSize: '20px' }}>{(page - 1) * itemsPerPage + (index + 1)}</div></td>
                                    <td onClick={() => openModal(item)} style={{ fontFamily: 'SKYBORI', fontSize: '20px', cursor: 'pointer' }}>{item.title}</td>
                                    <td><div style={{ fontFamily: 'SKYBORI', fontSize: '20px' }}>{new Date(item.noticeDate).toLocaleString().split(':').slice(0, -1).join(':')}</div></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>



                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '0%',Bottom: 10, }}>
                    {page > 1 && <button onClick={handleClickPrev} style={{ margin: '10px', padding: '10px', backgroundColor: '#FFFFFF', color: '#000000', border: '1px solid #DDDDDD', borderRadius: '3px' }}>이전</button>}
                    {[...Array(Math.ceil(data.length / itemsPerPage)).keys()].map((item, index) => (
                        <span key={index}
                            onClick={() => handlePageClick(item + 1)}
                            style={{
                                margin: '5px',
                                padding: '10px',
                                width: '42px',
                                height: '42px',
                                lineHeight: '25px',
                                textAlign: 'center',
                                backgroundColor: page === item + 1 ? '#000000' : '#FFFFFF',
                                color: page === item + 1 ? '#FFFFFF' : '#000000',
                                borderRadius: 100,
                                cursor: 'pointer',
                                fontSize: '14px'
                            }}>
                            {item + 1}
                        </span>
                    ))}
                    {page < Math.ceil(data.length / itemsPerPage) && <button onClick={handleClickNext} style={{ margin: '10px', padding: '10px', backgroundColor: '#FFFFFF', color: '#000000', border: '1px solid #DDDDDD', borderRadius: '3px' }}>다음</button>}
                </div>


                {showModal && selectedItem && (
                    <div className="BNmodal">
                        <div className="BNmodal-content">
                            <div className='BNclosediv'>
                                <span className="BNclose" onClick={closeModal}>&times;</span>
                            </div>
                           
                            <table class="BNnotice-table">
                                <thead>
                                    <tr>
                                        <th>제목</th>
                                        <th>내용</th>
                                        <th>작성일</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="BNtitle">{selectedItem.title}</td>
                                        <td class="BNcontent">{selectedItem.context}</td>
                                        <td class="BNmonth">{selectedItem.noticeDate}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
}

export default BoardNotice;