/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import network from '../../util/network';

const PlanConfirm = (props) => {
    const { commonPlanUid } = props;

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const res = await network.get('/plan/commonPlan/auth/' + commonPlanUid)
            res.data ? setData(res.data) : null;
        }
        getData();
    }, [])

    const divClass = (authImage) => {
        return "bg-[url('" + authImage + "')] bg-center bg-no-repeat bg-cover relative";
    }

    const profileImage = (_item) => {
        if (_item.profileImage == null) {
            return (_item.sex == 'female') ? '/images/img_profile_mom.png' : '/images/img_profile_dad.png';
        }

        return _item.profileImage;
    };

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
                                    <img src={profileImage(item)} className='border border-solid border-white rounded-full' />
                                </span>
                                <span className='block absolute left-0 bottom-0 pl-2 text-xs text-white font-light'
                                    style={{ paddingBottom: '29px', letterSpacing: '-0.3px' }}>{moment(item.regDt).format('YYYY년')}</span>
                                <span className='block absolute left-0 bottom-0 pb-2.5 pl-2 text-sm text-white font-normal'
                                    style={{ letterSpacing: '-0.42px' }}>{moment(item.date).format('M월 DD일')}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PlanConfirm;