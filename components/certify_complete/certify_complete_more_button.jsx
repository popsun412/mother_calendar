import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { useRouter } from 'next/router';
import network from "../../util/network";
import moment from "moment";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useRecoilState } from "recoil";
import { certifyLockerState } from "../../states/certify_locker";
import { certifyUploadImageState, certifyRviewState } from "../../states/certify_info";

export default function CertifyCompleteMoreButton(props) {
    const [lockers, setLockers] = useRecoilState(certifyLockerState);
    const [uploadImage, setUploadImage] = useRecoilState(certifyUploadImageState);
    const [review, setReview] = useRecoilState(certifyRviewState);

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
        const _check = confirm("인증 내역 즉시 삭제되고, 복원할 수 없습니다.\n삭제하시겠습니까?");
        if (!_check) return;

        const _result = await network.delete(`/auth/${props.auth.planAuthUid}`);
        router.back();
    }

    return <>
        <MoreVertIcon size="small" style={{ color: "#828282" }} onClick={handleClick} />
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose} >
            <MenuItem onClick={() => {
                setLockers([]);
                setUploadImage({ image_file: null, preview_URL: '' });
                setReview("");
                router.push(`/certify/edit?planAuthUid=${props.auth.planAuthUid}`);
            }}>수정</MenuItem>
            <MenuItem onClick={planDelete}>삭제</MenuItem>
        </Menu>
    </>
}