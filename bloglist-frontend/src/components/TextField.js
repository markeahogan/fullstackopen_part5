import React from 'react';

const TextField = ({label, value, onChange}) => {
    return (<div><label>{label} <input value={value} onChange={(e) => onChange(e.target.value)} /></label></div>);
}

export default TextField;