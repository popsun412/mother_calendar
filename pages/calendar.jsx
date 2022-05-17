import CalendarHome from "../components/calendar/calendar_home";
import CalendarMiddle from "../components/calendar/calendar_ middle";
import CalendarDate from "../components/calendar/calendar_date";
import CalendarTop from "../components/calendar/calendar_top";
import CalendarBottom from "../components/calendar/calendar_bottom";
import FriendList from "../components/calendar/frind_list";
import ItemDetail from "../components/main/itme_detail";
import CalendarFullPlan from "../components/calendar/calendar_full_plan";
import CircleLoading from "../components/common/circle_loading";

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

    const [load, setLoad] = useState(false);

    // 아이템 불러오기
    const getItem = async () => {
        console.log(userInfo);
        setLoad(true);
    }

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
        if (userInfo == null) {
            auth.onAuthStateChanged(async (_user) => {
                if (_user) {
                    getUser();
                } else {
                    setUserInfo(null);
                    router.push('/');
                }
            });
        }

        if (userInfo != null && !load) getItem();
    })

    return (<>
        {(load) ?
            // 화면
            <div className="w-screen h-screen flex flex-col">
                <CalendarTop />
                <CalendarMiddle />
                <CalendarDate />
                <CalendarHome />
                <CalendarBottom />

                <FriendList />
                <ItemDetail />
                <CalendarFullPlan />
            </div>
            // 로딩 바
            : <CircleLoading />
        }
    </>)
}

export default Calendar;
