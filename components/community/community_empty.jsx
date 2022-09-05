/* eslint-disable @next/next/no-img-element */
export default function CommunityEmpty() {
  return (
    <div className="flex flex-col h-full w-full justify-center items-center">
      <img src="/images/img_empty.png" alt="" className=" w-24 h-28 mb-3" />
      <span className="text-center text-base font-medium textGray3">
        오늘 하루 모임을
        <br />
        시작해보세요!
      </span>
    </div>
  );
}
