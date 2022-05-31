import CalendarMine from "./calendar_mine";
import CalendarName from "./calendar_name";


export default function CalendarMiddle(props) {
    return (
        <div className="px-5 pt-4 pb-3">
            <CalendarName
                selectedUserUid={props.selectedUserUid}
                setSelectedUserUid={props.setSelectedUserUid}
                selectedDate={props.selectedDate}
                setSelectedDate={props.setSelectedDate}
                selectedUserInfo={props.selectedUserInfo}
            />
        </div>
    );
}