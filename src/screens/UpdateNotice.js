import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateNotice = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { textNum } = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post(
                    "http://port-0-sonagi-app-project-1drvf2lloka4swg.sel5.cloudtype.app/boot/notice/textNumSearch",
                    textNum
                );
                console.log(response.data[0].title);
                setTitle(response.data[0].title);
                setContent(response.data[0].context);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [textNum]);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleContentChange = (e) => {
        setContent(e.target.value);
    }
    const handleBack = () => {
        navigate('/adminWrite');
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(title);
        console.log(content);
        console.log(textNum);
        try {
            await axios.post(`http://port-0-sonagi-app-project-1drvf2lloka4swg.sel5.cloudtype.app/boot/notice/modify`, {
                title: title,
                context: content,
                textNum: textNum
            });
            alert('공지사항이 성공적으로 수정되었습니다.');
            navigate('/adminWrite');
        } catch (error) {
            alert('공지사항 수정에 실패했습니다.');
            console.error(error);
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f5f5f5' }}>
            <form onSubmit={handleSubmit} style={{ width: '40%', backgroundColor: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
                <h1 style={{ marginBottom: '50px', fontFamily: 'SKYBORI', color: '#58ACFA', textAlign: 'center' }}>공지사항 수정</h1>
                <label style={{ display: 'block', marginBottom: '10px' }}>
                    제목:
                    <input type="text" value={title} onChange={handleTitleChange} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginTop: '5px' }} />
                </label>
                <label style={{ display: 'block', marginBottom: '10px' }}>
                    내용:
                    <textarea value={content} onChange={handleContentChange} style={{ width: '100%', height: '150px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginTop: '5px' }} />
                </label>
                <button type="submit" style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#58ACFA', color: 'white', cursor: 'pointer' }}>수정하기</button>
                <button type="button" onClick={handleBack} style={{ marginLeft: '10px', padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#58ACFA', color: 'white', cursor: 'pointer' }}>뒤로가기</button>
            </form>
        </div>
    );
}

export default UpdateNotice;