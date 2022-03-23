import { BookmarkBorderOutlined, ChevronRightRounded } from "@material-ui/icons"

export default function CalendarOther() {
    return (
        <>
            <div className="flex mb-4 justify-between">
                <div className='flex flex-row'>
                    <span className="text-2xl font-semibold textGray1 mr-2">다른맘</span>
                    <div className="flex px-2 text-xs font-normal border-color3 textOrange3 rounded-full border items-center text-center">6세, 경기, 엄마표</div>
                </div>
                <div className='flex flex-row'>
                    <img src="/images/like_off.png" className='w-7 h-7' alt="좋아요off" />
                    <img src="/images/like_on.png" className='w-7 h-7' alt="좋아요on" />
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div className='flex bg-gray2 rounded px-3 py-2'>
                    <span className="text-xs font-normal textGray2">2022년 2월 2주차</span>
                    <ChevronRightRounded style={{ fontSize: "1rem", color: "#4F4F4F" }} />
                </div>
                <div className="flex space-x-1 flex-row">
                    <div className='checkbox textGray2 text-xs font-normal px-3.5 py-1.5'>
                        보관함
                        <BookmarkBorderOutlined style={{ fontSize: "0.875rem" }} />
                    </div>
                </div>
            </div>
        </>
    )
}