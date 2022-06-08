/* eslint-disable @next/next/no-img-element */
//import { BookmarkBorderOutlined, ChevronRightRounded } from "@material-ui/icons"

import { Fragment } from "react";

// 글로벌 상태관리
import { useRecoilState } from "recoil";
import { userInfoState } from "../../states/user_info";
import CustomMobileDatepicker from "../../components/common/custom_mobile_datepicker";
import moment from "moment";
import Link from 'next/link';
import { useEffect, useState } from "react";
import network from "../../util/network";

import { Drawer } from "@mui/material";
import LockerDrawer from "../../components/calendar/locker_drawer";

export default function CalendarName(props) {
    // 글로벌 상태관리
    const [userInfo, setUserInfo] = useRecoilState(userInfoState);

    const [drawerOpen, setDrawerOpen] = useState(false);

    // show model
    const showModel = {
        get isMe() {
            return userInfo.uid == props.selectedUserUid;
        },
        get isShare() {
            if (userInfo.uid == props.selectedUserUid) return true;
            return props.selectedUserInfo.isShare ?? true;
        },
        get isFriend() {
            return (userInfo.friends ?? []).findIndex((_friend) => _friend.uid == props.selectedUserUid) >= 0;
        },
        get babysAge() {
            const _now = new Date();
            const _ages = [];
            (props.selectedUserInfo.babys ?? []).map((_baby) => {
                const _birth = moment(_baby.birth, 'YYYY-MM-DD').toDate();
                const _age = _now.getFullYear() - _birth.getFullYear() + 1;
                _ages.push(`${_age}세`);
            });

            return _ages.join(' ');
        },
        get region() {
            return props.selectedUserInfo.region ?? "";
        },
        get nick() {
            return (props.selectedUserInfo.interest == "엄마표 교육") ? "엄마표" : props.selectedUserInfo.interest;
        }
    }

    // 포멧팅
    const getDateFormat = () => {
        const _year = props.selectedDate.getFullYear();
        const _month = props.selectedDate.getMonth();
        const _week = weekOfMonth(moment(props.selectedDate));
        return `${_year}년 ${_month + 1}월 ${_week}주차`;
    }

    const weekOfMonth = (_moment) => _moment.week() - moment(_moment).startOf('month').week() + 1;

    // 친구추가
    const addFriends = () => {
        let _friends = userInfo.friends.map((_friend) => _friend);

        if (!showModel.isFriend) {
            _friends.push(props.selectedUserInfo);
        } else {
            const _checkIndex = userInfo.friends.findIndex((_friend) => _friend.uid == props.selectedUserUid);
            _friends.splice(_checkIndex, 1);
        }

        network.post('/user/updateFriends', { friends: _friends });

        setUserInfo({
            ...userInfo,
            friends: _friends
        });
    }

    // 리렌더링
    useEffect(() => {
    }, [userInfo])

    return (
        <>
            <div className="flex mb-4 justify-between">
                <div className='flex flex-row items-center'>
                    {(!props.selectedUserInfo.isShare) ? <img src={`/images/share_lock.png`} className='w-6 h-6' alt="비공개" /> : <></>}
                    <span className="text-xl font-semibold textGray1 mr-2">{(props.selectedUserInfo.nickName.length > 6) ? `${props.selectedUserInfo.nickName.substring(0, 6)}...` : props.selectedUserInfo.nickName}</span>
                    <div className="flex px-2 text-xs font-normal border-color3 textOrange3 rounded-full border items-center text-center">{`${showModel.babysAge}, ${showModel.region}, ${showModel.nick}`}</div>
                </div>

                {(!showModel.isMe) ?
                    <div className='flex flex-row' onClick={addFriends}>
                        <img src={(showModel.isFriend) ? `/images/like_on.png` : `/images/like_off.png`} className='w-7 h-7' alt="좋아요" />
                    </div>
                    : <></>
                }
            </div>
            <div className="flex justify-between items-center">
                <CustomMobileDatepicker
                    onChange={(value) => props.setSelectedDate(value)}
                    value={props.selectedDate}
                >
                    <div className='flex bg-gray2 rounded px-2 py-1.5 textGray2 items-center justify-center'>
                        <span className="text-xs">{getDateFormat()}</span>
                        <svg className="w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </div>
                </CustomMobileDatepicker>
                <div className="flex space-x-1 flex-row">
                    {(showModel.isMe) ? <Link href={'/plan/list'} passHref><div className='checkbox textGray2 text-xs font-normal px-3 py-1.5'>전체계획</div></Link> : <></>}
                    {(showModel.isShare) ? <div className='flex checkbox textGray2 text-xs font-normal px-3 py-1.5 items-center' onClick={() => setDrawerOpen(true)}>
                        보관함
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                        </svg>
                    </div> : <></>}
                </div>
            </div>
            <Fragment>
                <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}                >
                    <LockerDrawer userUid={props.selectedUserUid} />
                </Drawer>
            </Fragment>
        </>
    )
}