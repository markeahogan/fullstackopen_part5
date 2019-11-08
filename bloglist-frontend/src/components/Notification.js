import React from 'react';
import './Notification.css';

const Notification = ({message, style}) =>
{
    if (!message){ return null; }

    return (
        <div className={style}>{message}</div>
    )
}

export default Notification;