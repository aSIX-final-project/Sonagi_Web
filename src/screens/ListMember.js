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
                <h2 className="text-center mt-0" style={{ fontFamily: 'SKYBORI', fontSize: '40px' }}>참여한 분들</h2>
                <hr className="divider" />
                <div className="row gx-4 gx-lg-5">
                    <div className="col-lg-12">
                        <div>
                            <marquee>
                                {data.map((item, index) => (
                                    <div key={index} style={{
                                        display: 'inline-flex', flexDirection: 'column',  gap: '10px', marginRight: '35px',
                                        width:'360px',
                                        height:'200px',
                                        overflow: 'auto',
                                        backgroundSize: 'cover', 
                                        backgroundImage: 'url(./assets/images/busbus.png)', 
                                        backgroundPosition: 'center', 
                                        color: '#fff', 
                                    }}>
                                        < div style={{marginLeft:'160px'}}>
                                            <p style={{ color: '#000000', marginRight:'40px', marginTop:'17px',fontFamily: 'SKYBORI ', fontSize:'30px' }}>{item.adName}</p>
                                            <p style={{ color: '#000000', fontSize:'14px', marginTop:'-19px' }}>전화번호 : {item.adTel} <br></br>주소 : {item.address} <br></br>대표자명 : {item.name} <br></br></p>
                                        </div>
                                    </div>
                                ))}
                            </marquee>
                        </div>
                    </div>
                </div >
            </div >
        </section >
    );
}

export default ListMember;