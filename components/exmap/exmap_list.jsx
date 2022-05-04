import React, { useEffect, useState } from 'react';
import { styled, CssBaseline, Box, SwipeableDrawer } from '@material-ui/core';
import { Global } from '@emotion/react';
import moment from 'moment';
import axios from 'axios';

const Root = styled('div')(({ theme }) => ({
    height: '100%',
    backgroundColor: '#fff',
}));

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: '#fff',
}));

const drawerBleeding = 100;

const ExMapList = (props) => {

    const { window, markers, setMarkers } = props;
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([]);

    const getData = async() => {
        const res = await axios('http://localhost:4000/map/list', {
            method: 'GET'
        })
        setData(res.data);
    }

    useEffect(() => {
        getData();
        const dataNew = [];
        for(let i=0; i<markers.length; i++) {
            console.log(markers[i].getPosition())
            data.map((item, idx) => {
                item.lat == markers[i].getPosition().La && item.lng == markers[i].getPosition().Ma ?
                    dataNew.push(item) : ''
            })
        }
        setData(dataNew);
    }, [])

    const container = window !== undefined ? () => window().document.body : undefined;

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const getRate = (rate) => {
        let result = [];
        
        for(let i=1; i<=parseInt(rate); i++) {
            result.push(<img src='/images/ic_star_color.png'/>)
        }

        for(let i=1; i<=5-parseInt(rate); i++) {
            result.push(<img src='/images/ic_star_grey.png'/>)
        }

        return result;
    }

    return (
        <Root>
            <CssBaseline />
            <Global
                styles={{
                    '.MuiDrawer-root > .MuiPaper-root': {
                        height: `calc(85% - ${drawerBleeding}px)`,
                        overflow: 'visible',
                    },
                }}
            />
            <SwipeableDrawer
                container={container}
                anchor="bottom"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: true,
                }}
            >
            <StyledBox
                sx={{
                    position: 'absolute',
                    top: '-150px',
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    visibility: 'visible',
                    right: 0,
                    left: 0,
                }}
                >
                <div>
                {
                    data.map((item, idx) => {
                        return (
                            <div className='mx-5 my-4 flex' key={idx}>
                                <div className='mr-4'>
                                    <img src='/images/place1.png'/>
                                </div>
                                <div>
                                    <div className='mb-1' style={{fontSize: '15px'}}>{item.title}</div>
                                    <div className='mb-1 textGray3' style={{fontSize: '13px'}}>{moment(item.date).format('YYYY.MM.DD')} 방문</div>
                                    <div className='flex'>
                                        { getRate(item.rate) }
                                    </div>
                                    <div className='flex'>
                                        <span className='mr-1 text-xs rounded py-1 px-1.5' style={{backgroundColor: '#f0f5f8'}}>{item.tag1}</span>
                                        <span className='text-xs rounded py-1 px-1.5' style={{backgroundColor: '#f0f5f8'}}>{item.tag2}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </StyledBox>
            </SwipeableDrawer>
        </Root>
    )
}

export default ExMapList;