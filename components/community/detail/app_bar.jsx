import { useRouter } from "next/router";
import { ArrowBackIosNewRounded } from "@mui/icons-material";
import CommunityMoreButton from "./community_more_button";

/* eslint-disable @next/next/no-img-element */
export default function CommunityAppBar(props) {
  const router = useRouter();

  return (
    <div className="py-2 flex justify-between items-center">
      <div className="flex flex-auto justify-between items-center z-50">
        <ArrowBackIosNewRounded onClick={() => router.back()} style={{ width: 24, color: "#4f4f4f" }} />
      </div>
      <div className="flex">{props.checkCreator ? <CommunityMoreButton community={props.community} /> : <></>}</div>
    </div>
  );
}
