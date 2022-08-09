import { Collapse } from '@mui/material';
import { useState } from "react"

export default function CommunityMember(props) {
    const [expanded, setExpanded] = useState(false);

    return <>
        <div>
            <div className="flex justify-between items-center mb-2">
                <div className="flex items-center whitespace-nowrap overflow-hidden">
                    <img src="/images/place1.png" alt="" className="w-5 h-5 rounded-full mr-2" />
                    <span className="textGray1 text-sm font-medium mr-2 shrink">비빔밥볶음밥단무지밥비빔밥</span>
                    <div className="textOrange3 text-xs font-medium align-middle border border-color3 rounded-full px-2 py-1">6세, 11세, 서울, 엄마표</div>
                </div>
                <div className="text-white text-xs font-medium shrink-0 ml-7 bg-[#c4c4c4] px-2 py-1 rounded-full mr-4">수락대기</div>
                <div>
                    <img src={`${expanded ? "/images/up.png" : "/images/down.png"}`} alt="" className="w-4 h-2" onClick={() => setExpanded(!expanded)} />
                </div>
            </div>
            <Collapse in={expanded} className="bg-gray2 p-3">
                6살 여자아이와 함께 참여하고 싶어요~<br />
                요새 부쩍 아이가 보드게임에 재미를 붙여서 또래 아이들과 함께 보드게임을 즐기게 해주고 싶어서 신청해봅니다.
                금요일에 함께 재밌는 시간 보내요^^
            </Collapse>
        </div>
        <div>
            <div className="flex justify-between items-center mb-2">
                <div className="flex items-center whitespace-nowrap overflow-hidden">
                    <img src="/images/place1.png" alt="" className="w-5 h-5 rounded-full mr-2" />
                    <span className="textGray1 text-sm font-medium mr-2 shrink">비빔밥볶음밥단무지밥비빔밥</span>
                    <div className="textOrange3 text-xs font-medium align-middle border border-color3 rounded-full px-2 py-1">6세, 11세, 서울, 엄마표</div>
                </div>
                <div className="text-white text-xs font-medium shrink-0 ml-7 bg-[#FF6035] px-2 py-1 rounded-full mr-4">수락하기</div>
                <div>
                    <img src={`${expanded ? "/images/up.png" : "/images/down.png"}`} alt="" className="w-4 h-2" onClick={() => setExpanded(!expanded)} />
                </div>
            </div>
            <Collapse in={expanded} className="bg-gray2 p-3">
                6살 여자아이와 함께 참여하고 싶어요~<br />
                요새 부쩍 아이가 보드게임에 재미를 붙여서 또래 아이들과 함께 보드게임을 즐기게 해주고 싶어서 신청해봅니다.
                금요일에 함께 재밌는 시간 보내요^^
            </Collapse>
        </div>
    </>
}