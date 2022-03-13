import { HomeWorkOutlined, CalendarTodayOutlined, FeedbackTwoTone } from "@material-ui/icons"

export default function CalendarBottom() {
    return (
        <div className="flex py-2.5 inset-x-0 bottom-0 border-t border-gary2 bg-white">
            <div className="flex flex-col items-center flex-1">
                <HomeWorkOutlined htmlColor={`${true ? "red" : "yellow"}`} />
                <span>홈</span>
            </div>
            <div className="flex flex-col items-center flex-1">
                <CalendarTodayOutlined htmlColor={`${true ? "red" : "yellow"}`} />
                <span>피드</span>
            </div>
            <div className="flex flex-col items-center flex-1">
                <CalendarTodayOutlined htmlColor={`${true ? "red" : "yellow"}`} />
                <span>캘린더</span>
            </div>
            <div className="flex flex-col items-center flex-1">
                <FeedbackTwoTone htmlColor={`${true ? "red" : "yellow"}`} />
                <span>내 정보</span>
            </div>
        </div>
    )
}