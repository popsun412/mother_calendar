import CalendarMiddle from "../components/calendar/calendar_ middle";
import CalendarDate from "../components/calendar/calendar_date";
import CalendarTop from "../components/calendar/calendar_top";

export default function Calendar() {
    return (
        <div className="w-screen h-screen">
            <CalendarTop />
            <CalendarMiddle />
            <CalendarDate />
        </div>
    )
}