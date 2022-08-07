/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import network from "../../util/network";

let kakaoMap = null;
let clusterer = null;

const ExMapBody = (props) => {
    const router = useRouter();

    const container = useRef();

    // 맵 갖고오기
    const getMap = async (lat, lng) => {
        kakao.maps.load(() => {
            const options = {
                center: new kakao.maps.LatLng(lat, lng),
                level: 5,
            };

            kakaoMap = new kakao.maps.Map(container.current, options);

            // 확대, 축소 이벤트
            kakao.maps.event.addListener(kakaoMap, "zoom_changed", function () {
                setMarkers();
            });

            // 화면 이동 시
            kakao.maps.event.addListener(kakaoMap, "mouseup", function (mouseEvent) {
                setMarkers();
            });

            clusterer = new kakao.maps.MarkerClusterer({
                map: kakaoMap,
                averageCenter: true,
                minLevel: 2,
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

            setMarkers();
        });
    };

    // 카카오 맵
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    getMap(position.coords.latitude, position.coords.longitude);
                },
                (err) => {
                    getMap(37.5298837, 126.9648019);
                }
            );
        }
    }, []);

    // 클러스터
    const setMarkers = async () => {
        if (kakaoMap === null) return;

        const centerLngLat = [kakaoMap.getCenter().La, kakaoMap.getCenter().Ma];
        const mapProjection = kakaoMap.getProjection();
        const coordsFromPoint = mapProjection.coordsFromPoint(new kakao.maps.Point(50, 0));
        const endLngLat = [coordsFromPoint.La, coordsFromPoint.Ma];

        const _centerResult = await network.post("/home/recommPlaceMap", { ...props.param, centerLngLat, endLngLat });

        const imageSrc = "/images/vector.png";
        const imageSize = new kakao.maps.Size(29, 42);
        const imageOption = { offset: new kakao.maps.Point(15, 42) };
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

        const clusterMarkers = _centerResult.data.map((_item) => {
            if (_item.latlng != null) {
                var _marker = new kakao.maps.Marker({
                    position: new kakao.maps.LatLng(_item.latlng.coordinates[1], _item.latlng.coordinates[0]),
                    image: markerImage,
                    clickable: true,
                });

                (function (_marker) {
                    kakao.maps.event.addListener(_marker, "click", function () {
                        const _href = { pathname: "/item", query: { commonItemUid: _item.commonItemUid } };
                        router.push(_href);
                    });
                })(_marker);

                return _marker;
            }
        });

        clusterer.clear();
        clusterer.addMarkers(clusterMarkers);
    };

    return (
        <div className="w-full h-screen" style={{ paddingTop: 50 }}>
            <div className="w-full h-full" ref={container}></div>
        </div>
    );
};

export default ExMapBody;
