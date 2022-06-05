import React from 'react'
import {Box, Slider} from "@mui/material";
import s from "./SuperDoubleRange.module.css";

type SuperDoubleRangePropsType = {
    onChangeRange: (value: [number, number]) => void
    value: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {

    const onChangeCallback = (e: Event, newValue: any) => {
        onChangeRange(newValue);
    }

    return (
        <Box sx={{width: 300}}>
            <Slider
                className={s.double}
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={onChangeCallback}
                valueLabelDisplay="auto"
            />
        </Box>
    )
}

export default SuperDoubleRange