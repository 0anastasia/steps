import React from 'react';
import sortArr from './sortArr';
import Step from './step';

export default function MessageField(props) {
    const { steps } = props;
    const handleRemove = (id) => props.onRemove(id);
    sortArr(steps);
    
    return (
        <div className="steps">
            {steps.map(o => <Step step={o} onRemove={() => handleRemove(o.id)} key={o.id}/>)}
        </div>
    );
}