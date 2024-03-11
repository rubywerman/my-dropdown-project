import React, { useState, useEffect } from 'react';

function WorkExpand({ trigger, content, sentence, isOpen }) {
    const [isTrigger, setTrigger] = useState(false);
    useEffect(() => {
        setTrigger(isOpen);
    }, [isOpen]);

    const handleClick = (event) => {
        event.stopPropagation(); 
        setTrigger(!isTrigger);
    };

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
