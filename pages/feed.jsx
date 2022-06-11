/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState, Fragment } from 'react';
import { useRouter } from 'next/router';
import FeedHeader from "../components/feed/feed_header";
import FeedItem from '../components/feed/feed_item';
import Navigation from '../components/common/navigation';
import CircleLoading from "../components/common/circle_loading";
import { getAuth } from "firebase/auth";
import InfiniteScroll from "react-infinite-scroll-component";
import network from "../util/network";
import FeedFilter from '../components/feed/feed_filter';
import FeedReport from '../components/feed/feed_report';
import { Drawer } from "@mui/material";

export default function Feed() {
    const [planAuthUid, setPlanAuthUid] = useState();

    const [param, setParam] = useState({
        regions: [],
        subjects: [],
        age: [1, 4],
        interests: [],
    });

    const [hasMore, setHasMore] = useState(true);
    const [items, setItems] = useState([]);

    const auth = getAuth();
    const router = useRouter();

    const [declarationOpen, setDeclarationOpen] = useState(false);
    const [filterOpen, setFilterOpen] = useState(false);
    const [load, setLoad] = useState();

    const getItems = async () => {
        moreITems(true);

        const _result = await network.post(`/feeds`, { ...param, offset: items.length });
        if (_result.data.length == 0) setHasMore(false);
        setItems(_result.data);
    }

    const moreITems = async () => {
        const _result = await network.post(`/feeds`, { ...param, offset: items.length });
        if (_result.data == 0) moreITems(false);
        setItems(items.concat(_result.data));
    }

    useEffect(() => {
        auth.onAuthStateChanged(async (_user) => {
            if (_user) {
                await getItems();
                setLoad(true);
            } else {
                router.push('/');
            }
        });
    }, []);

    const onReport = async (contents) => {
        const _result = await network.post('/feed/report', { planAuthUid, contents });
        console.log(_result);

        setPlanAuthUid(null);
        setDeclarationOpen(false);
    }

    return (load) ? <>
        <InfiniteScroll
            dataLength={items.length}
            next={moreITems}
            hasMore={hasMore}
        >
            <FeedHeader setFilterOpen={setFilterOpen} />
            <div className="pt-4 pb-20 flex flex-col space-y-10" style={{ marginTop: 50 }}>
                {items.map((_item, idx) => {
                    return <FeedItem item={_item} key={idx} ages={param.age} onClick={() => {
                        setPlanAuthUid(_item.planAuthUid);
                        setDeclarationOpen(true);
                    }} />
                })}
            </div>
            <Navigation path={'feed'} />
        </InfiniteScroll>
        <Fragment>
            <Drawer open={filterOpen} onClose={() => setFilterOpen(false)} anchor='right' PaperProps={{ sx: { width: "80%" } }}>
                <FeedFilter setFilterOpen={setFilterOpen} param={param} setParam={setParam} getItems={getItems} />
            </Drawer>
        </Fragment>
        <Fragment>
            <Drawer open={declarationOpen} onClose={() => {
                setPlanAuthUid(null);
                setDeclarationOpen(false)
            }} anchor='bottom'>
                <FeedReport onReport={onReport} />
            </Drawer>
        </Fragment>
    </> : <div className="w-screen h-screen flex justify-center items-center"><CircleLoading /></div>
}