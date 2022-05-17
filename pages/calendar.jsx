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

const Calendar = (props) => {
    const auth = getAuth();
    const router = useRouter();

    const [load, setLoad] = useState(false);

    // 아이템 불러오기
    const getItem = async () => {
        setLoad(true);
    }

    useEffect(() => {
        auth.onAuthStateChanged(async (_user) => {
            if (_user) {
                getItem();
            } else {
                router.push('/');
            }
        });
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
