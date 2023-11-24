import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ListMember.css';

const ListMember = () => {
    const [data, setData] = useState([]);
    const [showPopup, setShowPopup] = useState(false); // 팝업 상태 추가

    useEffect(() => {
        axios.get('http://port-0-sonagi-app-project-1drvf2lloka4swg.sel5.cloudtype.app/boot/restaurant/findAll')
            .then(response => {
                console.log("listMember");
                console.log(response.data);
                setData(response.data.list);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const handleViewAll = () => { // 전체 보기 버튼 핸들러
        setShowPopup(true);
    }

    const closePopup = () => { // 팝업 닫기 핸들러
        setShowPopup(false);
    }

    return (
        <section className="page-section" id="ListMember" >
            <div className="scroll-container px-4 px-lg-5">
                <h2 className="text-center mt-0" style={{ fontFamily: 'SKYBORI', fontSize: '40px' }}>참여한 분들</h2>
                <hr className="divider" />
                <button onClick={handleViewAll}>전체 보기</button> {/* 전체 보기 버튼 추가 */}
                <div className="row gx-4 gx-lg-5">
                    <div className="col-lg-12">
                        <div>
                            {showPopup && ( // 팝업 보여주기
                                <div className="popup">
                                    <div className="popup_inner">
                                        <button onClick={closePopup}>닫기</button>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>이름</th>
                                                    <th>전화번호</th>
                                                    <th>주소</th>
                                                    <th>대표자명</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data.map((item, index) => (
                                                    <tr key={index}>
                                                        <td>{item.adName}</td>
                                                        <td>{item.adTel}</td>
                                                        <td>{item.address}</td>
                                                        <td>{item.name}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}
                            <marquee>
                                {data.map((item, index) => (
                                    <div key={index} style={{
                                        display: 'inline-flex', flexDirection: 'column', gap: '10px', marginLeft:'-150px',
                                        width: '660px',
                                        height: '270px',
                                        overflow: 'auto',
                                        backgroundSize: 'cover',
                                        backgroundImage: 'url(./assets/images/busbus.gif)',
                                        backgroundPosition: 'center',
                                        color: '#fff',
                                    }}>
                                        <div style={{ marginLeft: '300px', marginTop:'10px' }}>
                                            <p style={{ color: '#000000', marginRight: '40px', marginTop: '17px', fontFamily: 'SKYBORI ', fontSize: '30px' }}>{item.adName}</p>
                                            <p style={{ color: '#000000', fontSize: '14px', marginTop: '-19px' }}>전화번호 : {item.adTel} <br></br>주소 : {item.address} <br></br>대표자명 : {item.name} <br></br></p>
                                        </div>
                                    </div>
                                ))}
                            </marquee>
                            <img src='./assets/images/doro.png' style={{height:'20px', width:'1815px', marginTop:'-20px'}}></img>
                        </div>
                    </div>
                </div >
            </div >
        </section >
    );
}

export default ListMember;