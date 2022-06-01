/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import ParentsInfo from '../../components/myinfo/myinfo_parents';
import ChildrenInfo from '../../components/myinfo/myinfo_children';
import CircleLoading from '../../components/common/circle_loading';

// firebase
import { getAuth } from "firebase/auth";

// api호출
import network from "../../util/network";

const MyInfo = () => {
    const [activeIdx, setActiveIdx] = useState(0);

    const auth = getAuth();
    const router = useRouter();

    // 글로벌 상태관리
    const [userInfo, setUserInfo] = useState(null);

    // 로그인 확인
    const [load, setLoad] = useState(false);

    // 유저 정보 갖고오기
    const getUser = async () => {
        const _result = await network.post('/userInfo');

        // data 통신
        if (_result.status == 200) {
            setUserInfo(_result.data);
        } else {
            router.push('/');
        }
    }

    useEffect(() => {
        auth.onAuthStateChanged(async (_user) => {
            if (_user) {
                await getUser();
                setLoad(true);
            } else {
                setUserInfo(null);
                router.push('/');
            }
        });
    }, [router]);

    return (load)
        ? <div>
            <header className='sticky top-0 left-0 right-0 visible opacity-100 bg-white z-100' style={{ marginBottom: '-50px' }}>
                <div className='my-auto mx-auto py-0 px-4 relative flex items-center w-full bg-white' style={{ height: '50px' }}>
                    <div className='flex-1 flex items-center'>
                        <div>
                            <img src='/images/ic_back.png' onClick={() => { router.back() }} />
                        </div>
                        <div className='my-0 mx-auto text-base' style={{ letterSpacing: '-0.3px', fontSize: '15px' }}>내 정보 수정</div>
                    </div>
                </div>
            </header>
            <main style={{ marginTop: '50px' }}>
                <div className='grid grid-cols-2 items-center text-center textGray3 h-10 border-b border-solid border-gray4' style={{ fontSize: '13.4px' }}>
                    <div className={`h-10 leading-10 ${activeIdx === 0 ? 'textGray1 border-b-3 border-solid border-gary1' : ''}`} onClick={() => setActiveIdx(0)}>부모 정보</div>
                    <div className={`h-10 leading-10 ${activeIdx === 1 ? 'textGray1 border-b-3 border-solid border-gary1' : ''}`} onClick={() => setActiveIdx(1)}>아이 정보</div>
                </div>
                <section>
                    {(activeIdx == 0) ? <ParentsInfo userInfo={userInfo} setUserInfo={setUserInfo} /> : <></>}
                    {(activeIdx == 1) ? <ChildrenInfo userInfo={userInfo} setUserInfo={setUserInfo} /> : <></>}
                </section>
            </main>
        </div>
        : <div className="h-screen w-screen"><CircleLoading /></div>

}

export default MyInfo;