import React, { useState } from 'react';
import WorkExpand from './WorkExpand';
import SentenceWithLink from './SentenceWithLink';
const WorkText = () => {
    const mlh = "contributed to open source projects like Sci-kit Learn during the MLH Fellowship, ";
    const uchic = "and worked on research on classifying cloud formations using deep learning at the Center for Data and Computing at the University of Chicago, which led to two papers.";
    
    return (
        <div className="work-text">
            <span>I'm a software engineer at Tableau in core services on user, groups, and site management.</span>
            <span>During my undergrad at UC Berkeley,</span>
            <WorkExpand sentence="I participated in " trigger="internships" content={
                <p>
                    <SentenceWithLink 
                        sentence="I worked on the Launch Control System for Artemis I at NASA, "
                        replacements={[{customWord: "NASA", url: "https://www.nasa.gov/humans-in-space/nasa-certifies-new-launch-control-system-for-artemis-i/"}]}
                    />
                    <SentenceWithLink 
                        sentence="and helped implement IdP-initiated Single Logout for Tableau."
                        replacements={[{customWord: "Tableau", url: "https://www.tableau.com/"}]}
                    />
                </p>
                }
            />
            <WorkExpand sentence="and " trigger="research." content={
                <p>
                    <SentenceWithLink 
                        sentence="I lead a team devoted to gamification and user experience at Public Editor, " 
                        replacements={[{customWord: "Public Editor", url: "https://www.publiceditor.io/"}]}
                    />  
                    <SentenceWithLink 
                        sentence="contributed to open source projects like Sci-kit Learn during the MLH Fellowship, " 
                        replacements={[{customWord: "MLH Fellowship", url: "https://github.blog/2020-06-24-welcome-to-the-inaugural-class-of-mlh-fellows/"}]}
                    />
                    <SentenceWithLink
                        sentence="and worked on research classifying cloud formations using deep learning at the Center for Data and Computing at the University of Chicago, which led to two papers."
                        replacements={[
                            { customWord: "cloud formations", url: "https://datascience.uchicago.edu/research/is-climate-change-changing-clouds/" },
                            { customWord: "papers", url: "https://scholar.google.com/citations?user=3_8fKaEAAAAJ&hl" }
                        ]}
                    />
                </p>  
                }
            />        
        </div>
    );
};

export default WorkText;
