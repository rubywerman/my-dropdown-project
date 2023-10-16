import React, { useState } from 'react';
import WorkExpand from './WorkExpand';
const WorkText = () => {
    const nasa = <div className="work-info">
        <span>Intern at Kennedy Space Center, Spaceport Command and Control Development</span>
        <span>Added features to a test tool for the human-rated <a className="underlined" href="https://www.nasa.gov/humans-in-space/nasa-certifies-new-launch-control-system-for-artemis-i/" target="_blank" rel="noopener noreferrer">Launch Control System</a> used for monitoring, controlling, and commanding spacecraft during launch</span>
    </div>;

    const publicEditor = <div className="work-info">
    <span>Project of Goodly Labs and Berkeley Institute for Data Science</span>
    <span>Led the implementation of a gamification system in <a className="underlined" href="https://www.publiceditor.io/" target="_blank" rel="noopener noreferrer">Public Editor</a> , aimed at enhancing user experience and driving participation. Public Editor is a nationwide data science <a className="underlined" href="https://www.washingtonpost.com/news/monkey-cage/wp/2018/11/08/heres-a-way-you-can-combat-fake-news/" target="_blank" rel="noopener noreferrer">project</a> involving thousands of volunteers and news readers</span>
    </div>;

    const uchic = <div className="work-info">
    <span>Worked on a <a className="underlined" href="https://datascience.uchicago.edu/research/is-climate-change-changing-clouds/
    " target="_blank" rel="noopener noreferrer">project</a> using deep learning and computer vision to classify cloud textures and patterns, and how those features have changed over time, in order to improve climate projections. Research led to two published <a className="underlined" href="https://scholar.google.com/citations?user=3_8fKaEAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">papers</a>.</span>
    </div>;

    const mlh = <div className="work-info">
    <span>Selected from 20,000 applicants to be part of the inaugural class of 100 <a className="underlined" href="https://github.blog/2020-06-24-welcome-to-the-inaugural-class-of-mlh-fellows/
    " target="_blank" rel="noopener noreferrer">MLH Fellows</a>. Contributed to open source projects including Sci-Kit Learn, Project Jupyter, and Sci-Kit Image. I also worked in fellowship admissions, reviewing applications and interviewing candidates.</span>
    </div>;

  return (
    <div className="work-text">
        <span>I'm a software engineer at Tableau in core services on user, groups, and site management</span>
            <span>Previously: </span>
            <WorkExpand trigger="NASA" content={nasa}/>
            <WorkExpand trigger="Public Editor" content={publicEditor}/>
            <WorkExpand trigger="University of Chicago, Center for Data and Computing" content={uchic}/>
            <WorkExpand trigger="Major League Hacking" content={mlh}/>
    </div>
  );
};

export default WorkText;
