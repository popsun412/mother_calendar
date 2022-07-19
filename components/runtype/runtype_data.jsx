import { data } from "autoprefixer";
import React from "react";
import { runtypeColor } from "../../util/helper";

const RuntypeData = (props) => {
    let _total = 0;
    props.items.map((_item) => (_total = _total + _item.ctn));

    let datas = [];
    let etcCtn = _total;
    let _etcPercent = 100;
    props.items.map((_item) => {
        const _customItem = { ..._item, color: runtypeColor(_item.subject), percent: Math.floor((_item.ctn / _total) * 100) };
        datas.push(_customItem);
        etcCtn = etcCtn - _customItem.ctn;
        _etcPercent = _etcPercent - _customItem.percent;

        if (datas.length == 4) {
            datas.push({ subject: "그 외", ctn: etcCtn, color: "#828282", percent: _etcPercent });
            return false;
        }
    });

    return (
        <>
            <section>
                <div className="mx-5 h-30">
                    <div className="relative flex w-full space-x-1" style={{ top: "47px", bottom: "47px" }}>
                        {datas.map((_data, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`h-full ${index == 0 ? "rounded-tl-md rounded-bl-md" : ""} ${
                                        index + 1 == datas.length ? "rounded-tr-md rounded-br-md" : ""
                                    }`}
                                    style={{
                                        backgroundColor: _data.color,
                                        width: `${(_data.ctn / _total) * 100}%`,
                                        height: 26,
                                    }}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>
            <section>
                {datas.map((_data, index) => {
                    return (
                        <div key={index} className="flex justify-between" style={{ marginLeft: "30px", marginRight: "30px", height: "59px" }}>
                            <div className="flex items-center">
                                <div className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: _data.color }} />
                                <div className="ml-3" style={{ fontSize: "15px", letterSpacing: "-0.3px" }}>
                                    {_data.subject}
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="text-xs textGray4">{`실행 ${_data.ctn}일`}</div>
                                <div className="ml-3.5 text-base textGray2">{`${_data.percent}%`}</div>
                            </div>
                        </div>
                    );
                })}
            </section>
        </>
    );
};

export default RuntypeData;
