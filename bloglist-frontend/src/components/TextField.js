import React from 'react';

const TextField = ({ label, value, onChange }) => {
    return (<div><label>{label} <input value={value} onChange={onChange} /></label></div>);
};

export default TextField;