/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

export default function PlanMonthlyItem(props) {
    return <div className='flex mx-5 text-sm items-center'>
        <span className='textGray2 my-0 mx-auto flex-1 text-left' style={{ letterSpacing: '-0.42px' }}>{props.date.format('YYYY년 M월 D일')}</span>
        <span className='textGray2 my-0 mx-auto flex-1 text-right' style={{ letterSpacing: '-0.13px' }}>
            👦 <span className='textOrange4 font-semibold'>{props.count} 명</span>인증 완료
        </span>

        <Link href={{ pathname: '/confirm', query: { date: props.date.format("YYYYMMDD"), commonPlanUid: props.commonPlanUid } }} passHref>
            <img src='/images/ic_arrow-right-circle.png' className='ml-2' style={{ width: '17px', height: '17px' }} />
        </Link>
    </div>
}