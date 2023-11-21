import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListMember = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://port-0-sonagi-app-project-1drvf2lloka4swg.sel5.cloudtype.app/boot/review/findAll')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <section className="page-section bg-blue" id="ListMember">
            <div className="container px-4 px-lg-5">
                <h2 className="text-center mt-0">참여한 분들</h2>
                <hr className="divider" />
                <div className="row gx-4 gx-lg-5">
                    <div className="col-lg-12">
                        <div className="marquee-container">
                            {data.map(item => (
                                <span key={item.id}>{item.name} - {item.description} </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ListMember;