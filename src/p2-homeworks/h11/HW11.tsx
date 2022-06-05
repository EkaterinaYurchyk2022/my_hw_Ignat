import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from "./HW11.module.css";



function HW11() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(100);

    const setBoth = (value: [number, number]) => {
        setValue1(value[0]);
        setValue2(value[1]);
    }

    return (
        <div className={s.hw11}>
            <div>
                <span className={s.rangeValue}>{value1}</span>
                <SuperRange onChangeRange={setValue1} value={value1}/>
            </div>
            <div className={s.doubleRange}>
                <div>{value1}</div>
                <SuperDoubleRange onChangeRange={setBoth} value={[value1, value2]}/>
                <div>{value2}</div>
            </div>
        </div>
    )
}

export default HW11
