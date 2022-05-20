/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

export default function SignUpBabyAvatar(props) {
    return (
        <span className={`rounded-full w-9 h-9 ring-1 ring-[#e0e0e0] ${(props.active) ? "ring-[3px] ring-[#FF6035]" : ""}`} onClick={props.onClick}>
            <img src="/images/img-profile.png" className="w-full rounded-full" />
        </span>
    );
}