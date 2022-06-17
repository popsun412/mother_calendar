/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// 글로벌 상태관리

import Link from 'next/link';
import { useRouter } from 'next/router';
import CalendarTopAvatar from "./calendar_top_avatar";

export default function CalendarTop(props) {
    const router = useRouter();

    const profileImage = (_friend) => {
        if (!_friend.isShare) return '/images/profile_lock.png';

        if (_friend.profileImage == null) {
            return (_friend.sex == 'female') ? '/images/img_profile_mom.png' : '/images/img_profile_dad.png';
        }

        return _friend.profileImage;
    };

    return (
        <div className="flex px-5 pt-4 pb-3 space-x-4 border-b border-color border-[#e0e0e0]">
            <CalendarTopAvatar
                active={props.selectedUserUid == props.userInfo.uid}
                onClick={() => {
                    router.push('/calendar');
                }}
                profileImage={props.userInfo.profileImage ?? ""}
                sex={props.userInfo.sex}
            />

            {(props.userInfo.friends ?? []).map((_friend) => (
                <span className={`rounded-full w-9 h-9 ${props.selectedUserUid == _friend.uid ? "ring-[3px] ring-[#FF6035]" : "ring-1 ring-[#e0e0e0]"}`} key={_friend.uid} onClick={() => router.push(`/calendar?friend=${_friend.uid}`)}>
                    <div
                        className="rounded-full"
                        style={{
                            backgroundImage: `url("${profileImage(_friend)}")`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            width: "100%",
                            paddingTop: "100%",
                            backgroundPosition: "center center"
                        }}
                    />
                </span>
            ))}

            <Link href={"/neighbor"}>
                <button className="rounded-full w-9 h-9 border-dashed border-gary3 border flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#bdbdbd]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                </button>
            </Link>
        </div>
    )

}
