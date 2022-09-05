import { useRouter } from "next/router";
import { ArrowBackIosNewRounded } from "@mui/icons-material";

/* eslint-disable @next/next/no-img-element */
export default function CommunityAppBar(props) {
  const router = useRouter();

  return (
    <div className="py-2 flex justify-between items-center">
      <div className="flex flex-auto justify-between items-center z-50">
        <ArrowBackIosNewRounded onClick={() => router.back()} style={{ width: 24, color: "#4f4f4f" }} />
      </div>
      <div className="flex">
        <img src="/images/akar-icons-link-chain.png" alt="" className="w-6 h-6 mr-2" />
        <img src="/images/more-horizontal.png" alt="" className="w-6 h-6" />
      </div>
    </div>
  );
}
