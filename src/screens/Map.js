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
            const fetchPromises = res.data.map(async item => {
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

        locations.forEach((location, index) => {
            console.log(location);
            const markerPosition = new kakao.maps.LatLng(location.coordinates.y, location.coordinates.x);
            const marker = new kakao.maps.Marker({
                position: markerPosition
            });
            marker.setMap(map);

            const iwContent = `<div style="max-width: 300px; height: 100px; overflow: hidden; word-wrap: break-word;">
                            시설명: ${location.adName}<br>
                            관리자이름: ${location.managerName}<br>
                            주소: ${location.address}
                            <span id="closeBtn${index}" style="position: absolute; top: 0; right: 0; cursor: pointer; margin-right:10px;">X</span>
                        </div>`;
            const infowindow = new kakao.maps.InfoWindow({
                content: iwContent
            });

            kakao.maps.event.addListener(marker, 'click', function () {
                if (infowindow.getMap()) {
                    infowindow.close();
                } else {
                    infowindow.open(map, marker);
                    // setTimeout을 이용하여 DOM이 업데이트 된 후 이벤트 핸들러를 추가
                    setTimeout(() => {
                        document.getElementById(`closeBtn${index}`).onclick = function () {
                            infowindow.close();
                        };
                    }, 0);
                }
            });
        });

    }, [center, locations]);

    return <div id="map" style={{ width: '340px', height: '340px', border: 1, borderRadius: 10 }}></div>;
}

export default Map;