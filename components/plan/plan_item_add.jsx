/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import BookCard from "../locker/book_card";
import EduCard from "../locker/edu_card";
import PlaceCard from "../locker/place_card";
import network from "../../util/network";
import Link from "next/link";

import CircleLoading from "../../components/common/circle_loading";

// react, next
import { useRouter } from "next/router"

// firebase
import { getAuth } from "firebase/auth";

// 글로벌 상태관리
import { useRecoilState } from "recoil";
import { certifyLockerState } from "../../states/certify_locker";

export default function PlanItemAdd() {
    const auth = getAuth();
    const router = useRouter();
    const [lockers, setLockers] = useRecoilState(certifyLockerState);

    const [lockerType, setLockerType] = useState("책장");
    const [items, setItems] = useState([]);
    const [load, setLoad] = useState(false);
    const [getting, setGetting] = useState(false);

    const selectedStyle = "border-b-2 text-[#3c81e1] border-[#3c81e1]";
    const nonSelectedStyle = "textGray4 font-normal text-sm";

    const getItems = async () => {
        setItems([]);
        setGetting(true);

        const _result = await network.post('/locker/items', {
            order: "reg",
            status: 1,
            lockerType
        });

        setItems(_result.data);
        setGetting(false);
    }

    // 유저 정보 갖고오기
    const getUser = async () => {
        const _result = await network.post('/userInfo');

        // data 통신
        if (_result.status == 200) {
        } else {
            router.push('/');
        }
    }

    useEffect(() => {
        auth.onAuthStateChanged(async (_user) => {
            if (_user) {
                await getUser();
                await getItems();
                setLoad(true);
            } else {
                router.push('/');
            }
        });
    }, [router, lockerType]);

    const addLink = () => {
        if (lockerType == "책장") return "/addbook";
        if (lockerType == "교구장") return "/addtool";
        if (lockerType == "학원지도") return "/addacademy";
        if (lockerType == "체험지도") return "/addplace";
        return "";
    }

    const addLocker = (_item) => {
        if (lockers.findIndex((_locker) => _locker.itemUid == _item.itemUid) < 0) setLockers(lockers.concat([_item]));
        router.back();
    }

    return (load) ?
        <div className="flex flex-col w-screen h-screen overflow-y-auto">
            <div className="relative py-4 items-center justify-center">
                <span className="absolute mx-4 top-0 right-10 bottom-0 left-10 flex justify-center items-center" style={{ zIndex: 10 }}>보관함</span>

                <svg className="w-7 h-8 ml-1 textGray2 text-left z-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={() => router.back()}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
            </div>
            <span className="text-sm font-normal textGray2 flex items-center justify-center my-3">추가할 아이템을 선택해주세요.</span>

            <div className="flex-auto flex flex-col">
                <div className="grid grid-cols-4 text-center border-b-[0.38px] border-gary4 mb-2.5 justify-center items-center" id="myTab" data-tabs-toggle="#myTabContent">
                    <span className={`py-3 ${lockerType == "책장" ? selectedStyle : nonSelectedStyle}`} onClick={() => setLockerType("책장")}>책장</span>
                    <span className={`py-3 ${lockerType == "교구장" ? selectedStyle : nonSelectedStyle}`} onClick={() => setLockerType("교구장")}>교구장</span>
                    <span className={`py-3 ${lockerType == "학원지도" ? selectedStyle : nonSelectedStyle}`} onClick={() => setLockerType("학원지도")}>학원지도</span>
                    <span className={`py-3 ${lockerType == "체험지도" ? selectedStyle : nonSelectedStyle}`} onClick={() => setLockerType("체험지도")}>체험지도</span>
                </div>

                <div className="flex-auto flex flex-col px-5">
                    {(getting)
                        ? <div className="flex-auto flex justify-center items-center"><CircleLoading /></div>
                        : <>
                            {items.map((_item) => {
                                if (lockerType == "책장") return <BookCard key={_item.itemUid} item={_item} onClick={() => addLocker(_item)} />
                                if (lockerType == "교구장") return <EduCard key={_item.itemUid} item={_item} onClick={() => addLocker(_item)} />
                                if (lockerType == "학원지도") return <PlaceCard key={_item.itemUid} item={_item} onClick={() => addLocker(_item)} />
                                if (lockerType == "체험지도") return <PlaceCard key={_item.itemUid} item={_item} onClick={() => addLocker(_item)} />
                            })}

                            {/* 아이템이 없습니다 */}
                            {(items.length == 0) ?
                                <div className='flex-auto flex flex-col items-center justify-center'>
                                    <img src='/images/no_result.png' width={'93px'} height={'113px'} style={{ margin: '0 auto' }} />
                                    <div className='text-sm text-center textGray4 mt-2.5' style={{ lineHeight: 1.7, letterSpacing: '-0.28px' }}>
                                        아이템이 없습니다.<br />
                                        내가 구매예정인 아이템으로 채워주세요!
                                    </div>
                                </div> : <></>}
                        </>}
                    <Link href={addLink()} passHref>
                        <div className='fixed bottom-0 right-0 z-100'>
                            <img src='/images/ic_float.png' />
                        </div>
                    </Link>
                </div>
            </div>
        </div> : <div className="w-screen h-screen flex justify-center items-center">
            <CircleLoading />
        </div>

}