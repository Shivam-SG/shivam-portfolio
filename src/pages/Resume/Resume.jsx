import React from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from './TimelineItem';

const Resume = () => {
  
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Integral University"
            description="Bachelor Of Computer Application"
            date="2021 — 2024"
          />
          <TimelineItem
            title="Rani Laxmi Bai Memorial School"
            description="12th"
            date="2020 — 2021"
          />
          <TimelineItem
            title="Rani Laxmi Bai Memorial School"
            description="10th"
            date="2018 — 2019"
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Web Developer"
            date="Oct 2023 — Dec 2023"
            description="Led the development of full-stack web applications from concept to development, employing technologies like Node.js, React.js, and MongoDB."
          />
          <TimelineItem
            title="Data Scientist"
            date="Sep 2023 — Nov 2023"
            description="Additionally, I've had the opportunity to flex my analytical muscles as a data scientist, deriving insights and uncovering patterns to drive informed decision-making."
          />
          <TimelineItem
            title="Graphic designer"
            date="2020 — 2023"
            description="I've proudly worked as a graphic designer, turning ideas into visually captivating realities."
          />
        </ol>
        <a className="form-btn" href="/resume/SHIVAM_GUPTA_resume.pdf" download="SHIVAM_GUPTA_resume.pdf">Download Resume</a>
      </div>
      
    </section>
  );
};

export default Resume;