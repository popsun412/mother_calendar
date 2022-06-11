
export default function PlanTitle(props) {
    return (
        <div className="flex">
            <div
                className={`inline-flex flex-shrink-0 max-h-6 justify-center items-center px-1 py-0.5 mr-2 rounded text-white text-xs`}
                style={{ backgroundColor: `${(props.active ?? true) ? "#FF734D" : "#bdbdbd"}` }}
            >
                <span>{props.subject}</span>
            </div>
            <span className={`text-sm ${(props.active ?? true) ? "" : "textGray4 line-through"}`}>{props.title}</span>
        </div>
    )
}