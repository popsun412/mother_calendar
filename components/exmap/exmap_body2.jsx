import React, { useEffect, useRef, useState } from "react";
import clusterdata from "./markerCluster.json";
import ExMapList from "./exmap_list";
import Link from "next/link";

const ExMapBody = (props) => {
    const { markerPositions, size } = props;
    const [kakaoMap, setKakaoMap] = useState(null);
    const container = useRef();
    // const [markerClusterPositions, setMarkerClusterPositions] = useState(clusterdata);
    const [markerClusterPositions, setMarkerClusterPositions] = useState([]);
    const [open, setOpen] = useState(false);
    const [markers, setMarkers] = useState();

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=5ed92c5109844752200bc345ce2a6deb&autoload=false&libraries=services,clusterer";
        document.head.appendChild(script);

        script.onload = () => {
            kakao.maps.load(() => {
                const center = new kakao.maps.LatLng(37.56646, 126.98121);
                const options = {
                    center,
                    level: 11,
                };
                const map = new kakao.maps.Map(container.current, options);

                //setMapCenter(center);
                setKakaoMap(map);
            });
        };
    }, [container]);

    useEffect(() => {
        if (kakaoMap === null) {
            return;
        }

        // save center position
        const center = kakaoMap.getCenter();
        container.current.style.width = "360px";
        container.current.style.height = "750px";

        // relayout and...
        kakaoMap.relayout();
        // restore
        kakaoMap.setCenter(center);
    }, [kakaoMap, size]);

    useEffect(() => {
        if (kakaoMap === null) {
            return;
        }

        const clusterer = new kakao.maps.MarkerClusterer({
            map: kakaoMap,
            averageCenter: true,
            minLevel: 10,
            disableClickZoom: true,
            styles: [
                {
                    width: "40px",
                    height: "40px",
                    background: "rgba(255, 115, 77, 0.6)",
                    borderRadius: "20px",
                    color: "#fff",
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "40px",
                },
            ],
        });

        const clusterMarkers = markerClusterPositions.map((item) => {
            return new kakao.maps.Marker({
                position: new kakao.maps.LatLng(item.lat, item.lng),
            });
        });

        kakao.maps.event.addListener(clusterer, "clustered", function (clusters) {
            for (const i = 0; i < clusters.length; i++) {
                const cluster = clusters[i];
                const overlay = cluster.getClusterMarker().getContent();

                // 각 클러스터의 overlay에 mouseover 이벤트를 등록합니다.
                overlay.addEventListener("mouseover", function () {
                    if (!this.classList.contains("cluster_click")) {
                        this.classList.add("cluster_click");
                    } else {
                        this.classList.remove("cluster_click");
                    }
                });

                // 각 클러스터의 overlay에 mouseout 이벤트를 등록합니다.
                overlay.addEventListener("mouseout", function () {
                    if (this.classList.contains("cluster_click")) {
                        this.classList.remove("cluster_click");
                    }
                });
            }
        });
        clusterer.addMarkers(clusterMarkers);

        kakao.maps.event.addListener(clusterer, "clusterclick", function (cluster) {
            setMarkers(cluster.getMarkers());
            setOpen(true);
        });
    }, [kakaoMap, markerClusterPositions]);

    const locatonLoadSuccess = (pos) => {
        const currentPos = new kakao.maps.LatLng(pos.coords.latitude, pos.coords.longitude);

        console.log(currentPos);
        console.log(kakaoMap);

        kakaoMap.setLevel(3);
        kakaoMap.panTo(currentPos);

        const marker = new kakao.maps.Marker({
            position: currentPos,
        });

        marker.setMap(null);
        marker.setMap(kakaoMap);
    };

    const locationLoadError = (pos) => {
        console.log("위치 정보 실패");
    };

    const getCurrentPosBtn = () => {
        navigator.geolocation.getCurrentPosition(locatonLoadSuccess, locationLoadError);
    };

    return (
        <React.Fragment>
            <div id="container" ref={container} className="relative m-auto">
                <div className="absolute top-16 right-2.5 rounded-md flex items-center" style={{ zIndex: 5 }}>
                    <div
                        className="flex justify-center items-center text-center bg-white"
                        style={{ width: "50px", height: "50px", borderRadius: "25px", cursor: "pointer" }}
                        onClick={getCurrentPosBtn}
                    >
                        <img src="/images/ic_crosshair.png" />
                    </div>
                </div>
                <Link href="/addplace">
                    <div className="absolute top-28 rounded-md flex items-center" style={{ zIndex: 5, right: "-10px" }}>
                        <img src="/images/ic_float.png" style={{ width: 72, height: 72 }} />
                    </div>
                </Link>
                {open ? <ExMapList markers={markers} setMarkers={setMarkers} /> : ""}
            </div>
        </React.Fragment>
    );
};

export default ExMapBody;
