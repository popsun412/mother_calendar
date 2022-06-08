import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { useRouter } from 'next/router';
import network from "../../util/network";
import moment from "moment";
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function CertifyCompleteMoreButton(props) {
    const router = useRouter();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    // 플랜 삭제
    const planDelete = async () => {
        const _result = await network.delete(`/auth/${props.auth.planAuthUid}`);
        router.back();
    }

    return <>
        <MoreVertIcon size="small" style={{ color: "#828282" }} onClick={handleClick} />
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose} >
            <MenuItem onClick={() => {
                router.push(`/certify/edit?planAuthUid=${props.auth.planAuthUid}`);
            }}>수정</MenuItem>
            <MenuItem onClick={planDelete}>삭제</MenuItem>
        </Menu>
    </>
}