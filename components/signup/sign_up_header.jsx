import { useRouter } from "next/router";
import { ArrowBackIosNewRounded } from "@mui/icons-material";

export default function SignupHeader(props) {
  const router = useRouter();

  return (
    <div className="relative flex py-4 px-4">
      <ArrowBackIosNewRounded
        className="relative flex-shrink-0"
        onClick={() => {
          if (props.step > 1) {
            props.setStep(props.step - 1);
          } else {
            router.back();
          }
        }}
        style={{ width: 24, color: "#4f4f4f" }}
      />
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-base font-medium textGray1">회원가입</span>
    </div>
  );
}
