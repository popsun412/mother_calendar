/* eslint-disable @next/next/no-img-element */
export default function AuthSuccessPopup(props) {
    const countString = () => {
        if (props.param.authCount == props.param.totalCount) return "모두 완료했어요!";

        return `총 ${props.param.authCount}/${props.param.totalCount}회 완료`;
    };

    return (
        <div className="fixed left-0 top-0 right-0 bottom-0 bg-black/60 flex justify-center items-center">
            <div className="relative flex flex-col flex-shrink-0 items-center bg-white">
                <img
                    className="w-72"
                    src={`${
                        props.param.authCount == props.param.totalCount ? "/images/auth/auth_success_popup100.png" : "/images/auth/auth_success_popup.png"
                    }`}
                    alt=""
                />
                <div className="absolute text-center" style={{ top: 136 }}>
                    <p className="m-0 text-xl font-bold">{countString()}</p>
                    <p className="m-0 text-sm" style={{ color: "#898989" }}>
                        우리 아이 함께 잘 키워보아요!
                    </p>
                </div>
            </div>
        </div>
    );
}
