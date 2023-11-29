import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import QRCode from 'qrcode.react';

const BoardNotice = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [popupData, setPopupData] = useState(null);
    const itemsPerPage = 3;

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
            duration: 2000
        });
    }, []);

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
        <section className="page-section" id="BoardNotice" style={{ backgroundColor: '', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '875px' }}>
            <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" style={{ marginBottom:'10%', marginRight:'50%'}}>
                <div style={{ marginBottom: '7%' }}><strong>앱 다운로드하고 쉽게 나눔하러 가기</strong></div>
                <div style={{ marginLeft: '10%' }}>
                    <QRCode value="https://www.naver.com" size={130} bgColor="#524841"
                        fgColor="#FFFFFF" style={{ border: 1, borderRadius: 5 }} />
                </div>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" className="scroll-container px-4 px-lg-5" style={{ textAlign: 'center', width: '70%', marginTop:'-150px'  }}>
                <h1 className="text-center mt-0" style={{ fontFamily: 'SKYBORI'}}><strong>공지사항</strong></h1>
                <Link className="nav-link" to="/" style={{ fontFamily: 'SKYBORI', fontSize: 23, textAlign: 'right' }}>뒤로가기</Link>
                <table style={{ width: '100%', textAlign: 'center', marginTop: '3%' }}>
                    <thead style={{ borderTop: '2px solid black', borderBottom: '2px solid black' }}>
                        <tr>
                            <th style={{ fontFamily: 'SKYBORI', fontWeight: 'bold', fontSize: '25px' }}>번호</th>
                            <th style={{ fontFamily: 'SKYBORI', fontWeight: 'bold', fontSize: '25px' }}>제목</th>
                            <th style={{ fontFamily: 'SKYBORI', fontWeight: 'bold', fontSize: '25px' }}>작성일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((item, index) => (
                            <tr key={index}>
                                <td><div style={{ fontFamily: 'SKYBORI', fontSize: '17px' }}>{(page - 1) * itemsPerPage + (index + 1)}</div></td>
                                <td onClick={() => setPopupData(item)} style={{ fontFamily: 'SKYBORI', fontSize: '17px', cursor: 'pointer' }}>{item.title}</td>
                                <td><div style={{ fontFamily: 'SKYBORI', fontSize: '17px' }}>{new Date(item.noticeDate).toLocaleString().split(':').slice(0, -1).join(':')}</div></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <p>현재 페이지: {page} / 총 페이지 수: {Math.ceil(data.length / itemsPerPage)}</p>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {page > 1 && <button onClick={handleClickPrev} style={{ margin: '10px', padding: '10px', backgroundColor: '#FFFFFF', color: '#000000', border: '1px solid #DDDDDD', borderRadius: '3px' }}>이전</button>}
                    {[...Array(Math.ceil(data.length / itemsPerPage)).keys()].map((item, index) => (
                        <span key={index}
                            onClick={() => handlePageClick(item + 1)}
                            style={{
                                margin: '5px',
                                padding: '10px',
                                backgroundColor: page === item + 1 ? '#000000' : '#FFFFFF',
                                color: page === item + 1 ? '#FFFFFF' : '#000000',
                                border: '1px solid #DDDDDD',
                                borderRadius: '100px',
                                cursor: 'pointer'
                            }}>
                            {item + 1}
                        </span>
                    ))}
                    {page < Math.ceil(data.length / itemsPerPage) && <button onClick={handleClickNext} style={{ margin: '10px', padding: '10px', backgroundColor: '#FFFFFF', color: '#000000', border: '1px solid #DDDDDD', borderRadius: '3px' }}>다음</button>}
                </div>


                {popupData && (
                    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ width: '40%', backgroundColor: 'white', padding: '20px' }}>
                            <table style={{ width: '100%', textAlign: 'center' }}>
                                <tbody>
                                    <tr>
                                        <td style={{ fontFamily: 'SKYBORI', fontWeight: 'bold', fontSize: '25px' }}>{popupData.title}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <hr></hr>
                            <table style={{ width: '100%', textAlign: 'center', marginTop: '20px' }}>
                                <tbody>
                                    <tr>
                                        <td style={{ fontFamily: 'SKYBORI', fontSize: '17px' }}>{popupData.context}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                                <button onClick={() => setPopupData(null)} style={{ padding: '10px', borderRadius: '5px', backgroundColor: '#58ACFA', color: 'white', border: 'none' }}>닫기</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default BoardNotice;