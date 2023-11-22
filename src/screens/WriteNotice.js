import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const WriteNotice = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const itemsPerPage = 2;

    useEffect(() => {
        axios.get('http://port-0-sonagi-app-project-1drvf2lloka4swg.sel5.cloudtype.app/boot/notice/findAll')
            .then(response => {
                const sortedData = response.data.sort((a, b) => new Date(b.noticeDate) - new Date(a.noticeDate));
                setData(sortedData);
                console.log(sortedData);
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
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleContentChange = (e) => {
        setContent(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://port-0-sonagi-app-project-1drvf2lloka4swg.sel5.cloudtype.app/boot/notice/regist', {
                id: 'admin',
                title: title,
                context: content
            });
            alert('공지사항이 성공적으로 등록되었습니다.');
            window.location.reload();
        } catch (error) {
            alert('공지사항 등록에 실패했습니다.');
            console.error(error);
        }
    }

    const handleBack = () => {
        navigate('/');
    }
    const handleDelete = async (num) => {
        console.log(num);
        try {
            await axios.delete(`http://port-0-sonagi-app-project-1drvf2lloka4swg.sel5.cloudtype.app/boot/notice/delete/${num}`);
            alert('공지사항이 성공적으로 삭제되었습니다.');
            window.location.reload();
        } catch (error) {
            alert('공지사항 삭제에 실패했습니다.');
            console.error(error);
        }
    }

    const handleUpdate = (item) => {
        navigate(`/updateNotice/${item.textNum}`);
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#f5f5f5', minHeight: '100vh', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '50%', textAlign: 'center' }}>
                <form onSubmit={handleSubmit} style={{ backgroundColor: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
                    <h1 style={{ color: '#58ACFA', marginBottom: '30px', fontFamily: 'SKYBORI' }}>공지사항 등록</h1>
                    <label >
                        제목:
                        <input type="text" value={title} onChange={handleTitleChange} style={{ margin: '10px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }} />
                    </label>
                    <label style={{ display: 'block' }}>
                        내용:
                        <textarea value={content} onChange={handleContentChange} style={{ width: '100%', height: '150px', margin: '10px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
                    </label>
                    <div>
                        <button type="submit" style={{ marginRight: '10px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc', backgroundColor: '#58ACFA', color: 'white' }}>등록</button>
                        <button onClick={handleBack} style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', backgroundColor: '#000000', color: 'white' }}>뒤로가기</button>
                    </div>
                </form>
            </div>

            <div style={{ width: '50%', textAlign: 'center', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
                <h1 className="text-center mt-0" style={{ fontFamily: 'SKYBORI' }}>공지사항</h1>
                <hr className="divider" />
                <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
                    {data && data.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((item, index) => (
                        <div key={index} style={{ marginBottom: '20px' }}>
                            <h3 style={{ fontFamily: 'SKYBORI', fontSize: '30px' }}>제목 : {item.title}</h3>
                            <p>내용 : {item.context}</p>
                            <p>작성자 : {item.id}</p>
                            <p>작성일 : {item.noticeDate}</p>
                            <button onClick={() => handleUpdate(item)} style={{ marginRight: '10px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc', backgroundColor: '#F4623A', color: 'white' }}>수정</button>
                            <button onClick={() => handleDelete(item.textNum)} style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', backgroundColor: '#000000', color: 'white' }}>삭제</button>
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
        </div>

    );
}

export default WriteNotice;