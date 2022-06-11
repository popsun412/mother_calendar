/* eslint-disable @next/next/no-img-element */
import { CloseRounded } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/router";

import { useRecoilState } from "recoil";
import { planLockerTypeState } from "../../states/locker_type";

export default function PlanItemMenuTab(props) {
    const router = useRouter();
    const [planLockerType, setPlanLockerType] = useRecoilState(planLockerTypeState);

    const _menuList = [
        { url: "/addbook?isLocker=true", image: "/images/locker/locker1.png", label: "책장", lockerType: "책장" },
        { url: "/addtool?isLocker=true", image: "/images/locker/locker2.png", label: "교구장", lockerType: "교구장" },
        { url: "/addacademy?isLocker=true", image: "/images/locker/locker3.png", label: "학원지도", lockerType: "학원" },
        { url: "/addplace?isLocker=true", image: "/images/locker/locker4.png", label: "체험지도", lockerType: "체험" },
    ]

    return <>
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60" onClick={() => props.setMenuOpen(false)} />
        <div className="fixed right-0 bottom-0 flex">
            <div className="absolute flex flex-col right-4 bottom-6 items-end">
                <div className="flex flex-col items-end w-28 space-y-5 mr-1.5 mb-7">
                    {_menuList.map((_menu, idx) =>
                        <div className="flex text-white items-center justify-end space-x-3" key={idx} onClick={() => {
                            setPlanLockerType(_menu.lockerType);
                            router.push(_menu.url);
                        }}>
                            <span>{_menu.label}</span>
                            <div className="flex rounded-full w-9 h-9 justify-center items-center bg-white">
                                <img className="w-6" src={_menu.image} alt={_menu.label} />
                            </div>
                        </div>)}
                </div>
                <div className="rounded-full bg-white flex justify-center items-center" style={{ width: 50, height: 50 }} onClick={() => props.setMenuOpen(false)}>
                    <CloseRounded style={{ color: "#3C81E1" }} />
                </div>
            </div>
        </div>
    </>
}