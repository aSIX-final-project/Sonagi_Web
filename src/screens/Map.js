import React, { useEffect, useState } from "react";
import axios from "axios";

const { kakao } = window;

function Map() {
    const [center, setCenter] = useState({ lat: 33.450701, lng: 126.570667 }); // 초기값을 제주도로 설정
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        if (navigator.geolocation) { // 브라우저가 Geolocation을 지원하는지 확인
            navigator.geolocation.getCurrentPosition((position) => {
                setCenter({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
            });
        }
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('http://port-0-sonagi-app-project-1drvf2lloka4swg.sel5.cloudtype.app/boot/member/findAll');
            console.log(res.data);
            console.log("ㅎㅇㅎㅇ");
            console.log(res.data.list);
            const fetchPromises = res.data.list.map(async item => {
                const response = await fetch(`https://dapi.kakao.com/v2/local/search/address.json?query=${item.address}`, {
                    headers: {
                        Authorization: 'KakaoAK db06c51425b99419a11f3881f8491642'
                    }
                });
                const data = await response.json();
                console.log(data);
                const { x, y } = data.documents[0].road_address || data.documents[0].address;
                return { ...item, coordinates: { x, y } };
            });
            const locations = await Promise.all(fetchPromises);
            console.log("123");
            console.log(locations);
            setLocations(locations);
        };
        fetchData();
    }, []);
    
    useEffect(() => {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(center.lat, center.lng),
            level: 6
        };
        const map = new kakao.maps.Map(container, options);

        // 마커 그리기
        locations.forEach((locations) => {
            console.log(locations);
            const markerPosition = new kakao.maps.LatLng(locations.coordinates.y, locations.coordinates.x);
            const marker = new kakao.maps.Marker({
                position: markerPosition
            });
            marker.setMap(map);
        });

    }, [center, locations]); // center state가 변경될 때마다 지도를 새로 그립니다.

    return <div id="map" style={{ width: '340px', height: '340px', border: 1, borderRadius: 10 }}></div>;
}

export default Map;