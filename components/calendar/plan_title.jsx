
export default function PlanTitle(props) {
    return (
        <div className="flex">
            <div
                className={`flex justify-center items-center px-1 py-0.5 mr-2 rounded text-white text-xs`}
                style={{ backgroundColor: `${(true) ? "#FF734D" : "#bdbdbd"}` }}
            >
                <span>{props.subject}</span>
            </div>
            <span className="text-sm">{props.title}</span>
        </div>
    )
}