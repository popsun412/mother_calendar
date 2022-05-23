import React, { useEffect, useState } from 'react';
import moment from 'moment';
import network from '../../util/network';

const PlanConfirm = (props) => {

    const { planUid } = props;

    const [data, setData] = useState([
        {
            profileImage: 'https://picsum.photos/id/1/20',
            authImage: '/images/banner.png',
            regDt: '20220322'
        },
        {
            profileImage: 'https://picsum.photos/id/2/20',
            authImage: '/images/banner.png',
            regDt: '20220422'
        },
        {
            profileImage: 'https://picsum.photos/id/3/20',
            authImage: '/images/banner.png',
            regDt: '20220522'
        },
        {
            profileImage: 'https://picsum.photos/id/4/20',
            authImage: '/images/banner.png',
            regDt: '20220622'
        },
        {
            profileImage: 'https://picsum.photos/id/415/20',
            authImage: '/images/banner.png',
            regDt: '20220722'
        },
        {
            profileImage: 'https://picsum.photos/id/5/20',
            authImage: '/images/banner.png',
            regDt: '20220822'
        },
        {
            profileImage: 'https://picsum.photos/id/6/20',
            authImage: '/images/banner.png',
            regDt: '20220922'
        },
        {
            profileImage: 'https://picsum.photos/id/7/20',
            authImage: '/images/banner.png',
            regDt: '20221022'
        },
        {
            profileImage: 'https://picsum.photos/id/8/20',
            authImage: '/images/banner.png',
            regDt: '20221122'
        },
        {
            profileImage: 'https://picsum.photos/id/9/20',
            authImage: '/images/banner.png',
            regDt: '20221222'
        },
        {
            profileImage: 'https://picsum.photos/id/10/20',
            authImage: '/images/banner.png',
            regDt: '20220122'
        }
    ])

    useEffect(() => {
        const getData = async() => {
            const res = await network.post('/plan/commonPlan/auth/'+planUid)
            res.data ? setData(res.data) : null;
        }
        getData();
    }, [])

    const divClass = (authImage) => {
        return "bg-[url('"+authImage+"')] bg-center bg-no-repeat bg-cover relative";
    }

    return (
        <div>
            <div className="grid grid-cols-3 gap-1">
                {
                    data.map((item, idx) => {
                        return (
                            <div key={idx} className={divClass(item.authImage)} style={{ height: "7.5rem" }}>
                                <div
                                    className="w-full h-full absolute top-0 left-0"
                                    style={{ background: "rgba(0, 0, 0, 0.4)" }}
                                />
                                <span className='block absolute left-0 top-0 pl-2 pt-1.5'>
                                    <img src={item.profileImage} className='border border-solid border-white rounded-full'/>
                                </span>
                                <span className='block absolute left-0 bottom-0 pl-2 text-xs text-white font-light' 
                                    style={{paddingBottom: '29px', letterSpacing: '-0.3px'}}>{moment(item.regDt).format('YYYY년')}</span>
                                <span className='block absolute left-0 bottom-0 pb-2.5 pl-2 text-sm text-white font-normal' 
                                    style={{letterSpacing: '-0.42px'}}>{moment(item.date).format('M월 DD일')}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PlanConfirm;