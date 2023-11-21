import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ThanksTo = () => {
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
        <section className="page-section" id="ThanksTo" style={{ backgroundColor: '#BDBDBD' }}>
            <div className="container px-4 px-lg-5">
                <h2 className="text-center mt-0">고마운 분들</h2>
                <hr className="divider" />
                <div className="row gx-4 gx-lg-5">
                    {data.map(item => (
                        <div className="col-lg-3 col-md-6 text-center" key={item.id}>
                            <div className="mt-5">
                                <div className="mb-2"><i className="bi-gem fs-1 text-primary"></i></div>
                                <h3 className="h4 mb-2">{item.name}</h3>
                                <p className="text-muted mb-0">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ThanksTo;