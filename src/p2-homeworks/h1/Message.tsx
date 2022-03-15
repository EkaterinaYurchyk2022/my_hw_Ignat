import React from 'react'
import styles from './Message.module.css'

export type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={styles.message}>
            <img src={props.avatar} alt={'avatar'} className={styles.avatar}/>



            <div className={styles.content}>
                <div className={styles.name}>{props.name}</div>
                <div className={styles.name}>{props.message}</div>
                <div className={styles.name}>{props.time}</div>
                <div className={styles.angle}/>
            </div>
        </div>
    )
}

export default Message
