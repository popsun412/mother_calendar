/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import network from '../../util/network';
import { useRouter } from 'next/router';

const PlanConfirm = (props) => {
    const router = useRouter();
    const { commonPlanUid } = props;

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const res = await network.get('/plan/commonPlan/auth/' + commonPlanUid)
            res.data ? setData(res.data) : null;
        }
        getData();
    }, []);

    return (
        <div>
            <div className="grid grid-cols-3 gap-1">
                {
                    data.map((item, idx) => {
                        if (item.authImage == 'null') item.authImage = null;

                        return (
                            <div
                                className={`bg-center bg-no-repeat bg-cover relative h-[7.5rem]`}
                                key={item.planAuthUid}
                                style={{ backgroundImage: `url(${item.authImage})` }}
                                onClick={() => {
                                    router.push({ pathname: `/plan/${item.planUid}`, query: { userUid: item.userUid } });
                                }}
                            >
                                <div className="w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.4)]" />
                                <div className="flex flex-col absolute left-2.5 bottom-2.5">
                                    <span className="text-[#dbeffd] text-xs font-light">{moment(item.authDt).format("YYYY년")}</span>
                                    <span className="text-white font-normal text-sm shadow-[0px 0px 4px rgba(0,0,0,0.25)]">{moment(item.authDt).format("M월D일")}</span>
                                </div>
                                {(item.authImage == null) ? <div className="flex w-full h-full p-10 justify-center items-center">
                                    <img src="/images/img-empty-image.png" className="w-full h-full" />
                                </div> : <></>}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PlanConfirm;