/* eslint-disable react-hooks/exhaustive-deps */
import CalendarHome from "../components/calendar/calendar_home";
import CalendarMiddle from "../components/calendar/calendar_ middle";
import CalendarDate from "../components/calendar/calendar_date";
import CalendarTop from "../components/calendar/calendar_top";
import CalendarBottom from "../components/calendar/calendar_bottom";
import FriendList from "../components/calendar/frind_list";
import ItemDetail from "../components/main/itme_detail";
import CalendarFullPlan from "../components/calendar/calendar_full_plan";
import CircleLoading from "../components/common/circle_loading";
import { Fab } from "@material-ui/core";
import { Add } from "@material-ui/icons";

// react, next
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

// firebase
import { getAuth } from "firebase/auth";

// 글로벌 상태관리
import { useRecoilState } from "recoil";
import { userInfoState } from "../states/user_info";

// api호출
import network from "../util/network";

const Calendar = () => {
    const auth = getAuth();
    const router = useRouter();

    // 글로벌 상태관리
    const [userInfo, setUserInfo] = useRecoilState(userInfoState);

    // 로그인 확인
    const [load, setLoad] = useState(false);

    // 화면 상태관리
    const [selectedUserUid, setSelectedUserUid] = useState(null);

    // 날짜 선택
    const [selectedDate, setSelectedDate] = useState(new Date());

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
                setSelectedUserUid(_user.uid);
                setLoad(true);
            } else {
                setUserInfo(null);
                router.push('/');
            }
        });
    }, []);

    return (<>
        {(load) ?
            // 화면
            <div className="w-screen h-screen flex flex-col">
                <CalendarTop
                    selectedUserUid={selectedUserUid}
                    setSelectedUserUid={setSelectedUserUid}
                />
                <CalendarMiddle
                    selectedUserUid={selectedUserUid}
                    setSelectedUserUid={setSelectedUserUid}
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                />
                <CalendarDate
                    selectedUserUid={selectedUserUid}
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                />
                <CalendarHome
                    selectedUserUid={selectedUserUid}
                    selectedDate={selectedDate}
                />
                {/* <CalendarBottom />

                <FriendList />
                <ItemDetail />
                <CalendarFullPlan /> */}
                <div className="flex absolute right-5 bottom-16">
                    <Fab color="primary" aria-label="add" style={{ backgroundColor: '#ff6035' }} onClick={() => {
                        router.push('/plan/regist');
                    }}>
                        <Add />
                    </Fab>
                </div>
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
