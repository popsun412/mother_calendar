import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from 'date-fns/locale';

import "../../styles/test.module.css";


export default function CalendarPopUp() {
    const [startDate, setStartDate] = useState(new Date());
    const [value, onChange] = useState(new Date());

    return (
        <>
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="yyyy년 MM월 w주"
                locale={ko}
                displayStaticWrapperAs="desktop"
            />
        </>
    );
};

