import { useRouter } from "next/router";

/* eslint-disable @next/next/no-img-element */
export default function CommunityAppBar(props) {
  const router = useRouter();

  return (
    <div className="py-2 flex justify-between items-center">
      <div className="flex flex-auto justify-between items-center z-50">
        <svg
          className="w-6 h-8 textGray2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => router.back()}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </div>
      <div className="flex">
        <img src="/images/akar-icons-link-chain.png" alt="" className="w-6 h-6 mr-2" />
        <img src="/images/more-horizontal.png" alt="" className="w-6 h-6" />
      </div>
    </div>
  );
}
