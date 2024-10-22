import React from 'react';
import './AboutPage.css';

const AboutPage = ({ onBack }) => {
    return (
        <div className="about-page">
            <h2>About This Project</h2>
            
            <p>
                <strong>Hello there!</strong><br />
                I’m <strong>Harshil Sharma</strong>, a passionate frontend developer currently pursuing my final year in Computer Science & Engineering.
            </p>

            <h3>Project Overview</h3>
            <p>
                This project — a fully interactive <strong>Kanban Board</strong> — was built using <strong>React.js</strong>, with a focus on dynamic UI/UX design and API integration. The project involved grouping tasks by status, user, and priority, alongside sorting features. 
                <br /><br />
                <strong>Key Challenges:</strong>
                <ul>
                    <li>Displaying ticket details like priority, user, and tags dynamically from an API.</li>
                    <li>Ensuring pure CSS styling without using frameworks like Bootstrap or Tailwind.</li>
                    <li>Creating an intuitive user interface while keeping performance optimal.</li>
                </ul>
            </p>

            <h3>My Approach</h3>
            <p>
                I tackled this by breaking down complex features, debugging key issues, and ensuring seamless API interaction with efficient data display. The most rewarding aspect was perfecting the UI details — from displaying icons to tags, it was all about ensuring a clean, functional experience.
            </p>

            <h3>My Experience with TubeMagic</h3>
            <p>
                I recently completed a two-month internship at <strong>TubeMagic</strong>, a leading AI firm in the US, where I worked on YouTube optimization tools and earned $200 per month. My contributions were highly appreciated by both the <strong>Founder/CEO</strong> and my peers. You can check out their feedback in the <a href="https://harshilshrma.vercel.app/#recs" target='_blank'>recommendations section</a> of my portfolio!
            </p>

            <h3>Why QuickSell | DoubleTick?</h3>
            <p>
                I'm excited about the <strong>Frontend Engineer</strong> role at QuickSell | DoubleTick because I thrive on creating impactful, user-friendly solutions. QuickSell’s mission of empowering SMBs with powerful technology aligns perfectly with my passion. I’m eager to bring my skills, creativity, and experience to the QuickSell team to deliver the best possible user experiences.
            </p>

            <button onClick={onBack} className="back-button">⬅️ Back to Kanban Board</button>
        </div>
    );
};

export default AboutPage;
