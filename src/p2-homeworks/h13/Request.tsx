import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';
import styles from './Request.module.css'
import {ChangeEvent, useState} from 'react';
import {RequestAPI} from './api/request-api';
import {AxiosError} from 'axios';

export const Request = () => {
    const [checked, setChecked] = useState<boolean>(false)
    let [view, setView] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.currentTarget.checked)
    }

    const onClickHandler = () => {
        console.log(checked)
        RequestAPI.createRequest(checked)
            .then((res) => {
                console.log(res.data.errorText)
                setView(res.data.errorText)
            })
            .catch((error: AxiosError<{ errorText: string }>) => {
                if (error.response) {
                    setView(error.response.data.errorText)
                    return
                }
                setView(error.message)
            })
    }

    return (
        <div>
            <div className={styles.response}>
                {view}
            </div>
            <div className={styles.container}>
                <SuperButton onClick={onClickHandler}>Request</SuperButton>
                <SuperCheckbox type={'checkbox'} checked={checked} onChange={onChangeHandler}/>
            </div>
        </div>
    )
}


