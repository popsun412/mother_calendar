

export default function CalendarTop() {
    return (
        <div className="flex px-5 pt-10 pb-3 space-x-4 border-b" style={{ color: "#e0e0e0" }}>
            <span className="rounded-full" style={{ borderColor: "red", borderWidth: "3px", width: "2.31rem", height: "2.31rem" }}>
                <img src="/images/women.png" className="w-full" />
            </span>
            <span className="rounded-full w-9 h-9" style={{ borderColor: "red", borderWidth: "1px" }}>
                <img src="/images/men.png" className="w-full" />
            </span>

            <button className="rounded-full w-9 h-9 border-dashed border-gary3 border">
                <img src="/images/plus.png" className="w-4 h-4 m-auto" />
            </button>


            {/* 친구추가 버튼 이동 > 이웃리스트(friend_list.jsx) */}


            {/*
                요청하기
                - 원형이미지 테두리 없는 이미지 올려주세요
                - 원형테두리 빨간색과 회색 색상코드 알려주세요
            */}
        </div >
    )

}
