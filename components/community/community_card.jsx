/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

export default function CommunityCard(props) {
  // 분류 백그라운드
  const _subjectBg = () => {
    if (props.item.status == 0) return "bg4";
    if (props.item.status == 1) return "bg-blue4";
    if (props.item.status == 2) return "bg-gray4";
  };

  const _placeTypeImage = () => {
    if (props.placeType == 0) return "/images/frame.png";
    if (props.placeType == 1) return "/images/carbon-earth-filled.png";
    return "/images/frame.png";
  };

  return (
    <div className="p-4 bg-white rounded-lg mb-3">
      <div className="flex items-center mb-3">
        <span className={`text-white rounded-md text-xs py-1 px-2 mr-2 ${_subjectBg()}`}>수학</span>
        <div className={`text-sm align-middle item-middle items-center ${props.item.status == 2 ? "textGray4 line-through" : ""}`}>보드게임 하기</div>
      </div>
      <div className="flex flex-col mb-3.5">
        <div className="flex">
          <div className="flex align-middle items-center">
            <img src={`${props.item.status == 2 ? "/images/clock_off.png" : "/images/clock.png"}`} className="w-4 h-4" />
            <span className="textGray3 text-xs font-normal ml-1">오후 1시 ~ 오후 4시</span>
          </div>
          <div className="flex align-middle items-center ml-2.5">
            <img src={_placeTypeImage()} className="w-5 h-5" />
            <span className="textGray3 text-xs font-normal ml-1">잠실구 역삼동</span>
          </div>
        </div>
        <div className="flex align-middle items-center">
          <img src={`${props.item.status == 2 ? "/images/bi-people.png" : "/images/bi-people-fill.png"}`} className="w-4 h-4" />
          <span className="textGray3 text-xs font-normal ml-1">아이랑 만 1세 ~ 만 19세 </span>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex-auto flex-shrink-0 flex flex-nowrap gap-2">
          {/* 개설자 */}
          <div className="relative">
            <img src="/images/ellipse1.png" className="w-8 h-8" />
            <span className="absolute bottom-0 right-0">
              <img src="/images/group-7459.png" alt="" className="w-3 h-3" />
            </span>
          </div>

          {/* 멤버 */}

          <div className="w-8 h-8 rounded-full border border-dashed border-gary3 flex items-center justify-center">
            <img src="/images/plus.png" alt="" className="w-3 h-3 items-center" />
          </div>
        </div>
        <div className="flex">
          <p className="inline-block align-baseline">
            <span className="text-xs">{"1시간 / "}</span>
            <span className="text-base font-medium">{"20,000원"}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
