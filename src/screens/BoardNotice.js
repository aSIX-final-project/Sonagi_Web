import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BoardNotice = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const itemsPerPage = 2;

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
        <section className="page-section" id="BoardNotice" style={{ backgroundColor: '' }}>
            <div className="scroll-container px-4 px-lg-5" style={{ textAlign: 'center' }}>
                <h1 className="text-center mt-0" style={{ fontFamily: 'SKYBORI' }}>공지사항</h1>
                <hr className="divider" />

                <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
                    {data && data.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((item, index) => (
                        <div key={index} style={{ marginBottom: '20px' }}>
                            <h3 style={{ fontFamily: 'SKYBORI', fontSize: '30px' }}>제목 : {item.title}</h3>
                            <p>내용 : {item.context}</p>
                            <p>작성자 : {item.id}</p>  {/* 이 코드는 삭제될 수 있음 */}
                            <p>작성일 : {item.noticeDate}</p>
                            <hr />
                        </div>
                    ))}
                </div>

                <p>현재 페이지: {page} / 총 페이지 수: {Math.ceil(data.length / itemsPerPage)}</p>

                {[...Array(Math.ceil(data.length / itemsPerPage)).keys()].map((item, index) => (
                    <button key={index} onClick={() => handlePageClick(item + 1)} style={{ margin: '5px', padding: '10px', borderRadius: '5px', backgroundColor: '#4CAF50', color: 'white', border: 'none' }}>{item + 1}</button>
                ))}

                <button onClick={handleClickPrev} style={{ margin: '5px', padding: '10px', borderRadius: '5px', backgroundColor: '#f44336', color: 'white', border: 'none' }}>이전 페이지</button>
                <button onClick={handleClickNext} style={{ margin: '5px', padding: '10px', borderRadius: '5px', backgroundColor: '#008CBA', color: 'white', border: 'none' }}>다음 페이지</button>

            </div>
        </section>
    );
}

export default BoardNotice;