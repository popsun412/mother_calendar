/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import FeedHeader from "../components/feed/feed_header";
import FeedItem from '../components/feed/feed_item';
import Navigation from '../components/common/navigation';
import CircleLoading from "../components/common/circle_loading";
import { getAuth } from "firebase/auth";
import InfiniteScroll from "react-infinite-scroll-component";
import network from "../util/network";

export default function Feed() {
    const [hasMore, setHasMore] = useState(true);
    const [items, setItems] = useState([]);

    const auth = getAuth();
    const router = useRouter();

    const [filterOpen, setFilterOpen] = useState(false);
    const [load, setLoad] = useState();

    const getItems = async () => {
        const _result = await network.get(`/feeds?offset=${items.length}&limit=${20}`);
        if (_result.data.length == 0) setHasMore(false);
        setItems(_result.data);
    }

    const moreITems = async () => {
        const _result = await network.get(`/feeds?offset=${items.length}&limit=${20}`);
        setItems(items.concat(_result.data));
    }

    useEffect(() => {
        auth.onAuthStateChanged(async (_user) => {
            if (_user) {
                await getItems();
                setLoad(true);
            } else {
                setUserInfo(null);
                router.push('/');
            }
        });
    }, []);

    return (load) ? <>
        <InfiniteScroll
            dataLength={items.length}
            next={moreITems}
            hasMore={hasMore}
        >
            <FeedHeader setFilterOpen={setFilterOpen} />
            <div className="pt-4 pb-20 flex flex-col space-y-10">
                {items.map((_item) => {
                    return <FeedItem item={_item} key={_item.planAuthUid} />
                })}
            </div>
            <Navigation path={'feed'} />
        </InfiniteScroll>
    </> : <div className="w-screen h-screen flex justify-center items-center"><CircleLoading /></div>
}