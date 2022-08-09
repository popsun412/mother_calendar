/* eslint-disable @next/next/no-img-element */
export default function CommunityMemberEmpty() {
  return (
    <div className="flex flex-col items-center  py-10 ">
      <img src="/images/img_empty.png" alt="" className=" w-24 h-28 mb-3" />
      <span className="text-center text-base font-medium textGray3">
        모임에 함께 할 이웃을
        <br />
        기다리고 있어요.
      </span>
    </div>
  );
}
