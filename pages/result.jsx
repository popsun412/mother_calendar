import { useRouter } from 'next/router';
import React, { useState } from 'react';
import ResultBody from '../components/result/result_body';
import ResultHeader from '../components/result/result_header';

const Result = () => {
    const router = useRouter();
    const [keyword, setKeyword] = useState(router.query.value);

    return (
        <div className="w-full h-screen overflow-y-auto scrollbar-hide">
            <ResultHeader keyword={keyword} setKeyword={setKeyword} />
            <ResultBody keyword={keyword} setKeyword={setKeyword} />
        </div>
    )
}

export default Result;