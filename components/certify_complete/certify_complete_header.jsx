/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { profileImageCheck } from "../../util/helper";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import moment from "moment";
import CertifyCompleteMoreButton from "../certify_complete/certify_complete_more_button";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";

export default function CertifyCompleteHeader(props) {
  const router = useRouter();
  const auth = getAuth();

  const _babysAge = () => {
    const _now = new Date();
    const _ages = [];
    (props.userInfo.babys ?? []).map((_baby) => {
      const _birth = moment(_baby.birth, "YYYY-MM-DD").toDate();
      const _age = _now.getFullYear() - _birth.getFullYear() + 1;
      _ages.push(`${_age}세`);
    });

    return _ages.join(" ");
  };

  const nick = () => {
    return props.userInfo.interest == "엄마표 교육" ? "엄마표" : props.userInfo.interest;
  };

  return (
    <div className="flex my-4 px-5 justify-between items-center">
      <div
        className="flex items-center space-x-2"
        onClick={() => {
          router.push({ pathname: "/calendar", query: { friend: props.userInfo.uid } });
        }}
      >
        <span className={`rounded-full w-10 h-10`}>
          <div
            className="rounded-full"
            style={{
              backgroundImage: `url("${profileImageCheck(props.userInfo)}")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "100%",
              paddingTop: "100%",
              backgroundPosition: "center center",
            }}
          />
        </span>
        <div className="flex flex-col space-y-1 overflow-hidden" style={{ maxWidth: 120 }}>
          <span className="text-sm font-medium max-w-full whitespace-nowrap break-words overflow-hidden text-ellipsis">{props.userInfo.nickName}</span>
        </div>
      </div>

      <div className="flex">
        <div className="mr-1 flex h-6 px-2 text-xs font-normal border-color3 textOrange3 rounded-full border items-center text-center">{`${_babysAge()}, ${
          props.userInfo.region
        }, ${nick()}`}</div>
        {props.auth.userUid == auth.currentUser.uid ? <CertifyCompleteMoreButton auth={props.auth} /> : <></>}
      </div>
    </div>
  );
}
