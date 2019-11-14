import React from 'react';
import './Notification.css';
import PropTypes from 'prop-types';

const Notification = ({ message, style }) =>
{
    if (!message){ return null; }

    return (
        <div className={style}>{message}</div>
    );
};

Notification.propTypes = {
    message: PropTypes.string.isRequired
};

export default Notification;