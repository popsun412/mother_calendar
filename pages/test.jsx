import axios from 'axios';
import React, { useState } from 'react';

const Test = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const addStep1 = async(e) => {

        debugger;
        const param = {};

        param.category = 1;
        param.step = 1;

        if (e.target.length > 0) {
            for(let i=0; i<e.target.length; i++) {
                const id = e.target[i].id;
                param[id] = e.target[i].value;
                console.log(id);
            }
        }
        console.log(param);

        e.preventDefault();

        const res = await axios('http://localhost:4000/add/data', {
            method: 'POST',
            data: param,
            headers: new Headers()
        });

        if(res.data) {
            alert('데이터를 추가했습니다.')
            window.location.reload();
        }
    }

    const nameUpdate = (e) => {
        setName(e.target.value);
    }

    const emailUpdate = (e) => {
        setEmail(e.target.value);
    }

    const onChange = (e) => {
        console.log(e.target);
    }

    return (
        <div>
            <header>

            </header>
            <form method='POST' onSubmit={addStep1}>
                <div>
                    <span className='rounded-md border border-solid bg5 text-white py-1.5 px-3'>1단계 추천 계획</span>
                </div>
                <div>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                            <div><img src='/images/category1.png' /></div>
                            <div>한글 떼기 워크북 풀기</div>
                        </div>
                        <div>
                            <span className='none absolute opacity-0'>
                                <input type='submit' id='korean' aria-hidden='false' className='box-border p-0' value='korean'/>
                            </span>
                            <span><img src='/images/ic_add_circle.png'/></span>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                            <div><img src='/images/category1.png' /></div>
                            <div>과학 전집 부록의 실험 해보기</div>
                        </div>
                        <div>
                            <span className='none absolute opacity-0'>
                                <input type='submit' id='science' aria-hidden='false' className='box-border p-0' value='science'/>
                            </span>
                            <span><img src='/images/ic_add_circle.png'/></span>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Test;