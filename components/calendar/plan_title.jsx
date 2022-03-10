
export default function PlanTitle(props) {
    return (
        <div className="flex">
            <div
                className={`flex justify-center items-center px-1 py-0.5 mr-2 rounded text-white text-xs mb-3`}
                style={{ backgroundColor: `${(true) ? "#FF734D" : "#bdbdbd"}` }}
            >
                <span>국어</span>
            </div>
            <span className="text-sm">{props.title}</span>
        </div>
    )
}