import { BookmarkBorderOutlined, ChevronRightRounded } from "@material-ui/icons";

export default function CalendarMine() {
    return (
        <>
            <div className="flex mb-4 justify-between">
                <div className="flex mb-4">
                    <span className="text-2xl font-semibold textGray1 mr-2">세림맘</span>
                    <div className="flex px-2 text-xs font-normal border-color3 textOrange3 rounded-full border items-center text-center">5세, 서울, 엄마표</div>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div className='flex bg-gray2 rounded px-3 py-2'>
                    <span className="text-xs font-normal textGray2">2022년 2월 2주차</span>
                    <ChevronRightRounded style={{ fontSize: "1rem", color: "#4F4F4F" }} />
                </div>
                <div className="flex space-x-1 flex-row">
                    <div className='checkbox textGray2 text-xs font-normal px-3.5 py-1.5'>전체계획</div>
                    <div className='checkbox textGray2 text-xs font-normal px-3.5 py-1.5'>
                        보관함
                        <BookmarkBorderOutlined style={{ fontSize: "0.875rem" }} />
                    </div>
                </div>
            </div>
        </>
    )
}