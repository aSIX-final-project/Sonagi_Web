import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ListMember.css';

const ListMember = () => {
    const [data, setData] = useState([]);

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

    return (
        <section className="page-section" id="ListMember" >
            <div className="scroll-container px-4 px-lg-5">
                <h2 className="text-center mt-0" style={{fontFamily:'SKYBORI', fontSize:'40px'}}>참여한 분들</h2>
                <hr className="divider" />
                <div className="row gx-4 gx-lg-5">
                    <div className="col-lg-12">
                        <div className="marquee-container">
                            <marquee>
                                {data.map((item, index) => (
                                    <div key={index} style={{ display: 'inline-block', border: '1px solid black', padding: '10px', margin: '10px', borderRadius: '10px', marginRight:'5%', width: '15%', height: '15%', overflow: 'auto' }}>
                                        <h3 style={{ color: '#212529', textAlign:'center', fontFamily:'SKYBORI ' }}>{item.adName}</h3>
                                        <p style={{ color: '#6c757d' }}>전화번호 : {item.adTel} <br></br>주소 : {item.address} <br></br>대표자명 : {item.name} <br></br>전화번호 : {item.phoneNum}</p>
                                    </div>
                                ))}
                            </marquee>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ListMember;