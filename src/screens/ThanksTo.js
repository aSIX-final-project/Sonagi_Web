import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ThanksTo.css'; // CSS 파일 import
import 'aos/dist/aos.css';
import AOS from 'aos';


const ThanksTo = () => {
    const [data, setData] = useState([]);
    const [filterRegion, setFilterRegion] = useState('서울특별시');

    const regions = ['서울특별시', '인천광역시', '대전광역시', '대구광역시', '울산광역시', '부산광역시', '광주광역시', '경기도', '강원도', '충청도', '경상도', '전라도', '제주도'];

    useEffect(() => {
        axios.get('http://port-0-sonagi-app-project-1drvf2lloka4swg.sel5.cloudtype.app/boot/review/findAll')
            .then(response => {
                const sortedData = response.data.list.sort((a, b) => new Date(b.reviewDate) - new Date(a.reviewDate));
                setData(sortedData);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);

    const handleRegionChange = (event) => {
        setFilterRegion(event.target.value);
    }

    const filteredData = data.filter(item => item.regionCategory === filterRegion);

    return (
        <section className="page-section" id="ThanksTo" style={{ backgroundColor: '', height: '875px' }}>
            <div data-aos="fade-up"
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

            </div>
        </section>
    );
}

export default ThanksTo;