import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { useRouter } from 'next/router';
import network from "../../util/network";
import moment from "moment";

export default function PlanMoreButton(props) {
    const router = useRouter();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    // 계획 종료
    const planEnd = async () => {
        const _result = await network.put('/plan', {
            planUid: props.plan.planUid,
            endDate: moment().format("YYYY-MM-DD"),
        });

        if (_result.status == 200) {
            handleClose();
            router.push(`/plan/${props.plan.planUid}`);
        }
    }

    // 플랜 삭제
    const planDelete = async () => {
        const _check = confirm("계획 및 실행 내역 모두 즉시 삭제되고, 복원할 수 없습니다.\n삭제하시겠습니까?");
        if (!_check) return;

        await network.delete(`/plan/${props.plan.planUid}`);
        router.push('/calendar');
    }

    return <>
        <div>
            <svg className="w-6 h-6 textGray3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={handleClick}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
            </svg>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose} >
                <MenuItem onClick={() => {
                    router.push({ pathname: '/plan/edit', query: { planUid: props.plan.planUid } })
                }}>수정</MenuItem>
                {(moment().unix() < moment(props.plan.endDate).add(1, "d").unix()) ? <MenuItem onClick={planEnd}>종료</MenuItem> : <></>}
                <MenuItem onClick={planDelete}>삭제</MenuItem>
            </Menu>
        </div>
    </>
}