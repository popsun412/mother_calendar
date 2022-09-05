/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

export default function CalendarTopAvatar(props) {
  const nonSelectedRing = "ring-1 ring-[#e0e0e0]";
  const selectedRing = "ring-[3px] ring-[#FF6035]";

  let profileImage = props.profileImage;
  if (profileImage == "") profileImage = props.sex == "female" ? "/images/women.png" : "/images/men.png";

  return (
    <span className={`flex-shrink-0 rounded-full w-9 h-9 ${props.active ? selectedRing : nonSelectedRing}`} onClick={props.onClick}>
      <div
        className="rounded-full"
        style={{
          backgroundImage: `url("${profileImage}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          paddingTop: "100%",
          backgroundPosition: "center center",
        }}
      />
    </span>
  );
}
