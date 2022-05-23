/* eslint-disable @next/next/no-img-element */
//import { BookmarkBorderOutlined, ChevronRightRounded } from "@material-ui/icons"

import CalendarPopUp from "./calendar_popup";

// 글로벌 상태관리
import { useRecoilState } from "recoil";
import { userInfoState } from "../../states/user_info";
import moment from "moment";

export default function CalendarName(props) {
    // 글로벌 상태관리
    const [userInfo, setUserInfo] = useRecoilState(userInfoState);

    // show model
    const showModel = {
        get isMe() {
            return props.selectedUserUid != userInfo.uid;
        },
        get babysAge() {
            const _now = new Date();
            const _ages = [];
            userInfo.babys.map((_baby) => {
                const _birth = moment(_baby.birth, 'YYYY-MM-DD').toDate();
                const _age = _now.getFullYear() - _birth.getFullYear();
                _ages.push(`${_age}세`);
            });

            return _ages.join(' ');
        },
        get region() {
            return "";
        },
        get nick() {
            return "";
        }
    }

    return (
        <>
            <div className="flex mb-4 justify-between">
                <div className='flex flex-row'>
                    <span className="text-2xl font-semibold textGray1 mr-2">{userInfo.nickName}</span>
                    <div className="flex px-2 text-xs font-normal border-color3 textOrange3 rounded-full border items-center text-center">{`${showModel.babysAge}, ${showModel.region}, ${showModel.nick}`}</div>
                </div>

                {(showModel.isMe) ?
                    <div className='flex flex-row'>
                        <img src="/images/like_off.png" className='w-7 h-7' alt="좋아요off" />
                        <img src="/images/like_on.png" className='w-7 h-7' alt="좋아요on" />
                    </div>
                    : <></>
                }
            </div>
            <div className="flex justify-between items-center">
                <div className='flex bg-gray2 rounded px-3 py-2 textGray2 items-center justify-center'>
                    <span className="text-xs font-normal">
                        <CalendarPopUp
                            selectedDate={props.selectedDate}
                            setSelectedDate={props.setSelectedDate}
                        />
                    </span>
                    <svg className="w-3.5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </div>
                <div className="flex space-x-1 flex-row">
                    <div className='checkbox textGray2 text-xs font-normal px-3.5 py-1.5'>전체계획</div>
                    <div className='flex checkbox textGray2 text-xs font-normal px-3.5 py-1.5 items-center'>
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