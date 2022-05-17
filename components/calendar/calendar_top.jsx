

export default function CalendarTop() {
    return (
        <div className="flex px-5 pt-4 pb-3 space-x-4 border-b border-color border-[#e0e0e0]">
            <span className="rounded-full w-9 h-9 ring-1 ring-[#e0e0e0] hover:ring-[3px] hover:ring-[#FF6035]">
                <img src="/images/women.png" className="w-full rounded-full" />
            </span>
            <span className="rounded-full w-9 h-9 ring-1 ring-[#e0e0e0] hover:ring-[3px] hover:ring-[#FF6035]">
                <img src="/images/men.png" className="w-full rounded-full" />
            </span>
            <span className="rounded-full w-9 h-9 ring-1 ring-[#e0e0e0] hover:ring-[3px] hover:ring-[#FF6035]">
                <img src="/images/ellipse1.png" className="w-full rounded-full" />
            </span>

            <button className="rounded-full w-9 h-9 border-dashed border-gary3 border flex items-center justify-center">
                <svg className="w-6 h-6 text-[#bdbdbd]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
            </button>


            {/* 친구추가 버튼 이동 > 이웃리스트(friend_list.jsx) */}
        </div >
    )

}
