import { ArrowBackIosNewRounded } from "@mui/icons-material";
import { useRouter } from "next/router";

export default function CertifyCompleteAppbar() {
  const router = useRouter();

  return (
    <div className="flex items-center px-4 border-b" style={{ height: 50 }}>
      <ArrowBackIosNewRounded onClick={() => router.back()} style={{ width: 24, color: "#333" }} />
      <span className="mx-10 absolute left-0 right-0 text-center text-base font-medium textGray1 z-40">인증 완료</span>
    </div>
  );
}
