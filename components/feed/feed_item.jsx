/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { MoreVert, AddRounded, InfoOutlined } from "@mui/icons-material";
import { profileImageCheck, getLocktypeImage, calcTime } from "../../util/helper";
import moment from "moment";
import { useRouter } from "next/router";
import PlanTitle from "../calendar/plan_title";

const FeedItem = (props) => {
    const router = useRouter();
    const [allView, setAllView] = useState(false);

    // show model
    const showModel = {
        babysAge(_item) {
            const _now = new Date();
            const _ages = [];

            _item.babys.map((_baby) => {
                const _birth = moment(_baby.birth, "YYYY-MM-DD").toDate();
                const _age = _now.getFullYear() - _birth.getFullYear() + 1;
                _ages.push(`${_age}세`);
            });

            return _ages.join("");
        },
        region(_item) {
            return _item.userInfo.region ?? "";
        },
        nick(_item) {
            return _item.userInfo.interest == "엄마표 교육" ? "엄마표" : _item.userInfo.interest;
        },
        review(_item) {
            if (_item.review.length > 20 && !allView) return `${_item.review.substring(0, 20)}...`;
            return _item.review;
        },
    };

    return (
        <div>
            <div className="mx-5 mb-6 flex justify-between items-start">
                <div
                    className="flex"
                    onClick={() => {
                        router.push({ pathname: "/calendar", query: { friend: props.item.userUid } });
                    }}
                >
                    <div className="mr-3 w-10 h-10">
                        <div
                            className="rounded-full"
                            style={{
                                backgroundImage: `url("${profileImageCheck(props.item.userInfo)}")`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                width: "100%",
                                paddingTop: "100%",
                                backgroundPosition: "center center",
                            }}
                        />
                    </div>
                    <div>
                        <div className="text-sm" style={{ letterSpacing: "-0.56px" }}>
                            {props.item.userInfo.nickName}
                        </div>
                        <div className="text-xs textGray4" style={{ letterSpacing: "-0.36px" }}>
                            {calcTime(props.item.authDt)}
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="mr-1 border rounded-3xl border-color3 px-2 text-xs flex justify-center items-center textOrange3">
                        <span>{`${showModel.babysAge(props.item)}, ${showModel.region(props.item)}, ${showModel.nick(props.item)}`}</span>
                    </div>
                    <MoreVert style={{ color: "#828282", margin: 0, padding: 0, width: 24, heidght: 20 }} onClick={props.onClick} />
                </div>
            </div>
            <div className="mx-5 mb-3 flex items-center">
                <PlanTitle subject={props.item.plan.subject} />
                <p className="textGray1 text-lg font-semibold">{props.item.plan.name}</p>
            </div>
            {props.item.items.map((_locker) => (
                <div
                    key={_locker.itemUid}
                    className="mx-5 mb-4 flex border border-solid border-color4 rounded-md items-center justify-center"
                    style={{ height: "38px" }}
                >
                    <img className="w-4 h-4 mr-2" src={getLocktypeImage(_locker.lockerType, props.item.subject)} />
                    <div className="textOrange5" style={{ fontSize: "15px", letterSpacing: "-0.3px", lineHeight: "38px" }}>
                        {_locker.name}
                    </div>
                </div>
            ))}
            {props.item.image ? (
                <div
                    className="mb-4"
                    style={{
                        backgroundImage: `url("${props.item.image}")`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        width: "100%",
                        paddingTop: "100%",
                        backgroundPosition: "center center",
                    }}
                />
            ) : (
                <></>
            )}
            <div className="px-5 flex">
                <pre className="max-w-full whitespace-pre-wrap text-sm textGray1 resize-none">{showModel.review(props.item)}</pre>
                {props.item.review.length > 20 && !allView ? (
                    <span className="textGray4" style={{ fontSize: 9 }} onClick={() => setAllView(true)}>
                        더 보기
                    </span>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default FeedItem;
