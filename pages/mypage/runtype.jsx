import React, { useEffect, useState } from 'react';
import RuntypeData from '../../components/runtype/runtype_data';
import NoData from '../../components/runtype/nodata';

const RunType = () => {

    const [run, setRun] = useState({});
    const [key, setKey] = useState([]);
    const [sum, setSum] = useState(0);
    const [cal, setCal] = useState([]);

    const data = [
        {
            'eng': 35,
            'mat': 20,
            'art': 15,
            'kor': 10,
            'etc': 10
        }
    ]

    useEffect(() => {
        setSum(getSum(data));
        setKey(Object.keys(data[0]));
        setCal(getCalData(data, sum));
    }, []);

    const getSum = (data) => {
        let sum = 0;
        let sumArr = [];

        data.map((item, idx) => {
            sumArr = Object.values(item);
        })

        for (let i = 0; i < sumArr.length; i++) {
            sum += sumArr[i];
        }

        console.log(sum);

        return sum;
    }

    const getCalData = (data, sum) => {

        const run = [];
        let cal = {};

        data.map((item, idx) => {
            key.forEach(item2 => {
                cal[item2] = Math.round(item[item2] / sum * 100) / 100 * 100;
            })
        })

        run.push(cal);

        console.log(cal)

        return run;
    }

    return (
        <div>
            <header className='sticky top-0 left-0 right-0 visible opacity-100 bg-white z-100' style={{ marginBottom: '-50px' }}>
                <div className='my-auto mx-auto py-0 px-4 relative flex items-center w-full bg-white' style={{ height: '50px' }}>
                    <div className='flex-1 flex items-center'>
                        <img src='/images/ic_back.png' className="w-10 relative -left-4 flex-shrink-0" onClick={() => { window.history.back(); }} />
                        <div className='absolute left-0 right-0 mx-10 text-center text-base' style={{ letterSpacing: '-0.3px', fontSize: '15px' }}>내 실행 유형</div>
                    </div>
                </div>
            </header>
            <main style={{ marginTop: '50px' }}>
                {/* {
                    cal[0] ? <RuntypeData cal={cal} /> : <noData />
                } */}
                <NoData />
            </main>
        </div>
    )
}

export default RunType;