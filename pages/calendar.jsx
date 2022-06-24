/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import CalendarHome from "../components/calendar/calendar_home";
import CalendarMiddle from "../components/calendar/calendar_ middle";
import CalendarDate from "../components/calendar/calendar_date";
import CalendarTop from "../components/calendar/calendar_top";
import Navigation from '../components/common/navigation';
import CircleLoading from "../components/common/circle_loading";
import { Fab } from "@material-ui/core";
import { Add } from "@material-ui/icons";

// react, next
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

// firebase
import { getAuth } from "firebase/auth";

// api호출
import network from "../util/network";

import { useRecoilState } from "recoil";
import { selectedDateState } from "../states/calendar_states";

const Calendar = (props) => {
    const auth = getAuth();
    const router = useRouter();

    // 글로벌 상태관리
    const [userInfo, setUserInfo] = useState(null);

    // 로그인 확인
    const [load, setLoad] = useState(false);

    // 화면 상태관리
    const [selectedUserUid, setSelectedUserUid] = useState(null);
    const [selectedUserInfo, setSelectedUserInfo] = useState(null);

    // 날짜 선택
    const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);

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

    const getSelectedUserInfo = async (_userUid) => {
        const _result = await network.post('/user/friend', { userUid: _userUid });
        setSelectedUserInfo(_result.data);
    }

    useEffect(() => {
        auth.onAuthStateChanged(async (_user) => {
            if (_user) {
                await getUser();
                const _userUid = props.query.friend ?? _user.uid;
                setSelectedUserUid(_userUid);
                await getSelectedUserInfo(_userUid);
                setLoad(true);
            } else {
                setUserInfo(null);
                router.push('/');
            }
        });
    }, [router]);

    return (<>
        {(load) ?
            // 화면
            <div className="w-screen h-screen flex flex-col">
                <CalendarTop
                    selectedUserUid={selectedUserUid}
                    setSelectedUserUid={setSelectedUserUid}
                    userInfo={userInfo}
                />
                <CalendarMiddle
                    selectedUserUid={selectedUserUid}
                    setSelectedUserUid={setSelectedUserUid}
                    selectedUserInfo={selectedUserInfo}
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                    userInfo={userInfo}
                    setUserInfo={setUserInfo}
                />
                <CalendarDate
                    selectedUserUid={selectedUserUid}
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                    selectedUserInfo={selectedUserInfo}
                    userInfo={userInfo}
                    setUserInfo={setUserInfo}
                />
                <CalendarHome
                    selectedUserUid={selectedUserUid}
                    selectedDate={selectedDate}
                    selectedUserInfo={selectedUserInfo}
                    userInfo={userInfo}
                    setUserInfo={setUserInfo}
                />
                {(auth.currentUser.uid == selectedUserUid)
                    // ? <div className="flex fixed right-5 bottom-20">
                    //     <Fab color="primary" aria-label="add" style={{ backgroundColor: '#ff6035' }} onClick={() => {
                    //         router.push('/plan/regist');
                    //     }}>
                    //         <Add />
                    //     </Fab>
                    // </div>
                    ? <div className='fixed right-5 bottom-20' onClick={() => {
                        router.push('/plan/regist');
                    }}>
                        <img src='/images/ic_float.png' style={{ width: 72, height: 72 }} />
                    </div>
                    : <></>}
                <Navigation path={'calendar'} />
            </div>
            // 로딩 바
            :
            <div className="h-screen w-screen">
                <CircleLoading />
            </div>
        }
    </>)
}

export default Calendar;

Calendar.getInitialProps = async (ctx) => {
    return {
        query: ctx.query
    }
}
