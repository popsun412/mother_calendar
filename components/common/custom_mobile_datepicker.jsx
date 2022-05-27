
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import TextField from '@mui/material/TextField';
import { ko } from "date-fns/locale";
import { useState } from 'react';

export default function CustomMobileDatepicker({ children, ...props }) {
    const [open, setOpen] = useState(false);

    return <>
        <div className="flex" onClick={() => { setOpen(true) }}>{children}</div>
        <div className="hidden">
            <LocalizationProvider locale={ko} dateAdapter={AdapterDateFns}>
                <MobileDatePicker
                    open={open}
                    inputFormat="yyyy년MM월dd일"
                    value={props.value}
                    onChange={(date) => { props.onChange(date); }}
                    onClose={() => { setOpen(false) }}
                    renderInput={(params) => <TextField
                        id="selcedtedDatePicker"
                        size="small"
                        className="outline-none border-0 focus:outline-none"
                        {...params}
                    />}
                />
            </LocalizationProvider>
        </div>
    </>
}