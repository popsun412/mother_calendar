import CalendarMiddle from "../components/calendar/calendar_ middle";
import CalendarTop from "../components/calendar/calendar_top";

export default function Calendar() {
    return (
        <div className="w-screen h-screen">
            <CalendarTop />
            <CalendarMiddle />
        </div>
    )
}