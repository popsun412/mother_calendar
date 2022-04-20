import React from 'react';

import SearchHeader from '../components/search/search_header';
import SearchTag from '../components/search/search_tag';

const Search = () => {

    return (
        <div className="w-screen h-screen overflow-y-auto scrollbar-hide">
            <SearchHeader />
            <main className='mt-20'>
                <SearchTag />
            </main>
        </div>
    )
}

export default Search;