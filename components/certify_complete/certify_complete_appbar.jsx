import { ArrowBackIos } from "@mui/icons-material";
import { useRouter } from "next/router";

export default function CertifyCompleteAppbar() {
    const router = useRouter();

    return (
        <div className="flex items-center px-5 border-b" style={{ height: 50 }}>
            <ArrowBackIos onClick={() => router.back()} />
            <span className="mx-10 absolute left-0 right-0 text-center text-base font-medium textGray1 z-40">인증 완료</span>
        </div>
    )
}