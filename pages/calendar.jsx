import CalendarHome from "../components/calendar/calendar_home";
import CalendarMiddle from "../components/calendar/calendar_ middle";
import CalendarDate from "../components/calendar/calendar_date";
import CalendarTop from "../components/calendar/calendar_top";
import CalendarBottom from "../components/calendar/calendar_bottom";
import FriendList from "../components/calendar/frind_list";
import ItemDetail from "../components/main/itme_detail";

export default function Calendar() {
    return (
        <div className="w-screen h-screen flex flex-col">
            <CalendarTop />
            <CalendarMiddle />
            {/* <CalendarDate /> */}
            {/* <CalendarHome /> */}
            {/* <CalendarBottom /> */}

            {/* <FriendList /> */}
            {/* <ItemDetail /> */}
        </div>
    )
}