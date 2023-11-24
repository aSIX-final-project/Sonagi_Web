import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BoardNotice = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [popupData, setPopupData] = useState(null);
    const itemsPerPage = 5; //한번에 보이는 공지사항 개수 결정

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
        <section className="page-section" id="BoardNotice" style={{ backgroundColor: '', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div className="scroll-container px-4 px-lg-5" style={{ textAlign: 'center', width: '70%' }}>
                <h1 className="text-center mt-0" style={{ fontFamily: 'SKYBORI' }}>공지사항</h1>
                <hr className="divider" />

                <table style={{ width: '100%', textAlign: 'center', marginLeft: '5%' }}>
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
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    {page > 1 && <button onClick={handleClickPrev} style={{ margin: '5px', padding: '10px', borderRadius: '5px', backgroundColor: '#f44336', color: 'white', border: 'none' }}>이전</button>}
                    {[...Array(Math.ceil(data.length / itemsPerPage)).keys()].map((item, index) => (
                        <button key={index}
                            onClick={() => handlePageClick(item + 1)}
                            style={{
                                margin: '5px',
                                padding: '10px',
                                borderRadius: '5px',
                                backgroundColor: page === item + 1 ? '#FFD700' : '#4CAF50',
                                color: 'white',
                                border: 'none'
                            }}>
                            {item + 1}
                        </button>
                    ))}
                    {page < Math.ceil(data.length / itemsPerPage) && <button onClick={handleClickNext} style={{ margin: '5px', padding: '10px', borderRadius: '5px', backgroundColor: '#008CBA', color: 'white', border: 'none' }}>다음</button>}
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