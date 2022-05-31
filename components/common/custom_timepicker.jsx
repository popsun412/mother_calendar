
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import TextField from '@mui/material/TextField';
import { ko } from "date-fns/locale";
import { useState } from 'react';

export default function CustomTimepicker({ children, ...props }) {
    const [open, setOpen] = useState(false);

    return <>
        <div className={`flex ${(props.auto ?? false) ? "flex-auto" : ""}`} onClick={() => { setOpen(true) }}>{children}</div>
        <div className="hidden">
            <LocalizationProvider locale={ko} dateAdapter={AdapterDateFns}>
                <TimePicker
                    open={open}
                    value={props.value}
                    onChange={(time) => { props.onChange(time); }}
                    onClose={() => { setOpen(false); }}
                    renderInput={(params) => <TextField
                        size="small"
                        className="outline-none border-0 focus:outline-none"
                        {...params}
                    />}
                />
            </LocalizationProvider>
        </div>
    </>
}