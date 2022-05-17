//import { BookmarkBorderOutlined, ChevronRightRounded } from "@material-ui/icons"

import CalendarPopUp from "./calendar_popup";

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
                <div className='flex bg-gray2 rounded px-3 py-2 textGray2 items-center justify-center'>
                    <span className="text-xs font-normal"><CalendarPopUp /></span>
                    <svg className="w-3.5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </div>
                <div className="flex space-x-1 flex-row">
                    <div className='flex checkbox textGray2 text-xs font-normal px-3.5 py-1.5'>
                        보관함
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}