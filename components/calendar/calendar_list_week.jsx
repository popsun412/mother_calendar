
export default function PlanListWeek() {
    return (
        <div className="w-full h-full overflow-y-auto flex-col items-stretch bg-white p-2" style={{ backgroundColor: "#E0E0E0" }}>
            <div className="bg-white flex flex-col pt-2 pl-3 pb-4">
                <div className="flex">
                    <div
                        className={`flex justify-center items-center px-1 py-0.5 mr-2 rounded text-white text-xs`}
                        style={{ backgroundColor: `${(true) ? "#FF734D" : "#bdbdbd"}` }}
                    >
                        <span>국어</span>
                    </div>
                    <span className="text-sm">대교 벽보 한글 읽기</span>
                </div>
                <div className="flex px-4 justify-between">
                    요일
                </div>
            </div>
        </div>
    )
}