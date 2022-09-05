/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { useRouter } from "next/router";
import Link from "next/link";
import moment from "moment";
import { ArrowBackIosNewRounded } from "@mui/icons-material";

export default function FriendList(props) {
  const router = useRouter();

  // show model
  const showModel = {
    profileImage(_user) {
      if (!_user.isShare) return "/images/profile_lock.png";

      if (_user.profileImage == null) {
        return _user.sex == "female" ? "/images/img_profile_mom.png" : "/images/img_profile_dad.png";
      }

      return _user.profileImage;
    },
    babysAge(_user) {
      const _now = new Date();
      const _ages = [];

      _user.babys.map((_baby) => {
        const _birth = moment(_baby.birth, "YYYY-MM-DD").toDate();
        const _age = _now.getFullYear() - _birth.getFullYear();
        _ages.push(`${_age}세`);
      });

      return _ages.join(" ");
    },
    region(_user) {
      return _user.region ?? "";
    },
    nick(_user) {
      return _user.interest == "엄마표 교육" ? "엄마표" : _user.interest;
    },
  };

  return (
    <div className="w-full h-full overflow-y-scroll scrollbar-hide bg-gray2">
      <div className="flex py-4 px-4 items-center relative">
        <span className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center">추천 계정</span>
        <ArrowBackIosNewRounded className="relative flex-shrink-0" onClick={() => router.back()} style={{ width: 24, color: "#4f4f4f" }} />
      </div>
      <p className="text-center mb-6">새로운 이웃을 추가해보세요!</p>

      <div className="grid grid-cols-2 gap-3 px-5">
        {props.items.map((_item) => {
          return (
            <div className="flex flex-col bg-white rounded-lg py-4" key={_item.uid}>
              <img src={showModel.profileImage(_item)} className="m-auto mb-2 rounded-full" style={{ width: "4.5rem", height: "4.5rem" }} />
              <p className="text-center textGray1 font-normal text-lg mb-2 truncate w-24 m-auto">{_item.nickName}</p>
              <div className="flex items-center justify-center">
                <span className="px-2 py-1 mb-4 text-xs font-normal border-blue3 textBlue1 rounded-full border text-center">{`${showModel.babysAge(
                  _item
                )}, ${showModel.region(_item)}, ${showModel.nick(_item)}`}</span>
              </div>
              <Link href={`/calendar?friend=${_item.uid}`} passHref>
                <div className="flex itmes-center justify-center">
                  <button type="button" className="text-center text-xs font-semibold text-white bg-blue4 rounded-md py-1.5 px-6">
                    프로필 방문
                  </button>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
