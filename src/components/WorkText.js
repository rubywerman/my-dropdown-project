import React, { useState } from 'react';
import WorkExpand from './WorkExpand';
import SentenceWithLink from './SentenceWithLink';
const WorkText = () => {
    const mlh = "contributed to open source projects like Sci-kit Learn during the MLH Fellowship, ";
    const uchic = "and worked on research on classifying cloud formations using deep learning at the Center for Data and Computing at the University of Chicago, which led to two papers.";
    
    return (
        <div className="work-text">
            <span>I'm a software engineer at Tableau in core services on user, groups, and site management.</span>
            <span>During my time at UC Berkeley,</span>
            <WorkExpand sentence="I did" trigger="internships " content={
                <p>
                    <SentenceWithLink 
                        sentence="At NASA, I added test tools for the human-rated Launch Control System. "
                        replacements={[{customWord: "NASA", url: "https://www.nasa.gov/humans-in-space/nasa-certifies-new-launch-control-system-for-artemis-i/"}]}
                    />
                    <SentenceWithLink 
                        sentence="Then at Tableau, I implemented identity provider initiated single logout."
                        replacements={[{customWord: "Tableau", url: "https://www.tableau.com/"}]}
                    />
                </p>
                }
            />
            <WorkExpand sentence="and " trigger="research." content={
                <p>
                    <SentenceWithLink 
                        sentence="At Public Editor, I lead a team focused on gamification. " 
                        replacements={[{customWord: "Public Editor", url: "https://www.publiceditor.io/"}]}
                    />  
                    <SentenceWithLink 
                        sentence="During the MLH Fellowship, I contributed to open-source projects such as Sci-kit Learn. " 
                        replacements={[{customWord: "MLH Fellowship", url: "https://github.blog/2020-06-24-welcome-to-the-inaugural-class-of-mlh-fellows/"}]}
                    />
                    <SentenceWithLink
                        sentence="Additionally, I conducted research around classifying cloud formations using machine learning at the University of Chicago's Center for Data and Computing."
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
