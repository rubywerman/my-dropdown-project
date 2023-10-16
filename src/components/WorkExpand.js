import React, { useState } from 'react';

function WorkExpand({ trigger, content }) {
    const [isTrigger, setTrigger] = useState(false);

    const handleClick = (event) => {
        event.stopPropagation(); 
        setTrigger(!isTrigger);
    };

    return (
        <div className="work-expand">
        <span className="work-trigger" onClick={handleClick}>
            {trigger}
        </span>
        <div className={`expanded-content ${isTrigger ? 'open' : ''}`}>
        {isTrigger && content}
        </div>
        </div>
    );
}

export default WorkExpand;
