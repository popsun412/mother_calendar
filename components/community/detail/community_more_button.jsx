/* eslint-disable react/jsx-no-undef */
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useRouter } from "next/router";
import { useState } from "react";

/* eslint-disable @next/next/no-img-element */
export default function CommunityMoreButton(props) {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div>
        <img src="/images/more-horizontal.png" alt="" className="w-6 h-6" onClick={handleClick} />
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem
            onClick={() => {
              console.log(props.community);
              const _href = {
                pathname: props.community.communityType == 0 ? "/community/freeedit" : "/community/payedit",
                query: { cid: props.community.communityUid },
              };
              router.push(_href);
            }}
          >
            수정
          </MenuItem>
          <MenuItem onClick={() => {}}>삭제</MenuItem>
        </Menu>
      </div>
    </>
  );
}
