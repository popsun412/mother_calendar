/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import moment from "moment";

export default function AcademyCard(props) {
    return <div className='flex mb-5' onClick={props.onClick}>
        <div className='mr-4'>
            <img src={props.item.image} className={`rounded-md border border-solid border-color4 ${props.item.image == null ? "bg-gray2" : ""}`} style={{ width: '94px', height: '94px' }} />
        </div>
        <div>
            <div className='font-semibold' style={{ fontSize: '15px', letterSpacing: '-0.3px' }}>{props.item.name}</div>
            {props.item.regDt ? <div className='textGray3' style={{ fontSize: '13px' }}>{moment(props.item.regDt).format('YYYY.MM')} 방문</div> : <></>}
            <div></div>
            <div>
                {(props.item.subject) ? <span className='px-1.5 text-xs textGray3 rounded mr-1.5'
                    style={{ paddingTop: '3px', paddingBottom: '3px', backgroundColor: '#f0f5f8' }}>{props.item.subject}</span> : <></>}
                <span className='px-1.5 text-xs textGray3 rounded'
                    style={{ paddingTop: '3px', paddingBottom: '3px', backgroundColor: '#f0f5f8' }}>학원</span>
            </div>
        </div>
    </div>
}