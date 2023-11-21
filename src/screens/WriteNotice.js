import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const WriteNotice = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

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
            navigate('/');
        } catch (error) {
            alert('공지사항 등록에 실패했습니다.');
            console.error(error);
        }
    }

    const handleBack = () => {
        navigate('/');
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        제목:
                        <input type="text" value={title} onChange={handleTitleChange} style={{ margin: '10px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
                    </label>
                </div>
                <div>
                    <label style={{ display: 'block' }}>
                        내용:
                    </label>
                    <textarea value={content} onChange={handleContentChange} style={{ width: '250px', height: '150px', margin: '10px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
                </div>
                <div>
                    <button type="submit" style={{ marginRight: '10px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc', backgroundColor: '#F4623A', color: 'white' }}>등록</button>
                    <button onClick={handleBack} style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', backgroundColor: '#000000', color: 'white' }}>뒤로가기</button>
                </div>
            </form>
        </div>
    );
}

export default WriteNotice;