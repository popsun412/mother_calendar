import { useRouter } from 'next/router'

export default function SignupHeader(props) {
    const router = useRouter();

    return <div className="relative flex py-4">
        <svg
            className="w-7 h-8 ml-1 textGray2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
                if (props.step > 1) {
                    props.setStep(props.step - 1);
                } else {
                    router.back();
                }
            }}
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
        </svg>
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-base font-medium textGray1">회원가입</span>
    </div>;
}