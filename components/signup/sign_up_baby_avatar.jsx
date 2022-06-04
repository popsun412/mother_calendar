/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

export default function SignUpBabyAvatar(props) {
    const checkAge = () => {
        if (props.index == 0) return "첫째";
        if (props.index == 1) return "둘째";
        if (props.index == 2) return "셋째";
        if (props.index == 3) return "넷째";
        if (props.index == 4) return "다섯째";
    }

    return (
        <div className="flex flex-col items-center">
            <span className={`relative rounded-full w-9 h-9 mb-2 ${(props.active) ? "ring-[3px] ring-[#FF6035]" : "ring-1 ring-[#e0e0e0]"}`}>
                <img src="/images/img-profile.png" className="w-full rounded-full" onClick={props.onClick} />
                {(props.deleteActive) ? <img src="/images/ic-delete.png" className="absolute -top-1 -right-2 w-1/2" onClick={props.onDelete} /> : <></>}
            </span>
            <span className={`text-xs font-medium ${props.active ? "textOrange4" : "textGray4"}`}>{checkAge()}</span>
        </div>
    );
}