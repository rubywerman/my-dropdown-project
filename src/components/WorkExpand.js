import React, { useState } from 'react';

function WorkExpand({ trigger, content, sentence }) {
    const [isTrigger, setTrigger] = useState(false);

    const handleClick = (event) => {
        event.stopPropagation(); 
        setTrigger(!isTrigger);
    };
    console.log(content);

    return (
        <div className="work-expand">
            <span>
                {sentence}
                <span className="work-trigger" onClick={handleClick}>
                    {trigger}
                </span>
            </span>
                <div className={`expanded-content ${isTrigger ? 'open' : ''}`}>
                {isTrigger && content}
            </div>
        </div>
    );
}

export default WorkExpand;
