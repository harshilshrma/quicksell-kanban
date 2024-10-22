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

            <h3>Project Breakdown: Kanban Board Application</h3>

            <p>
                <strong>Project Overview:</strong><br />
                The goal of this project was to build an interactive Kanban board using <strong>React.js</strong> that would dynamically group and sort tasks based on their status, priority, or assigned user. This involved creating a robust frontend while adhering to pure CSS styling guidelines without the use of libraries like Bootstrap or Tailwind.
            </p>

            <p>
                <strong>1. Initial Setup and Planning:</strong><br />
                I started by setting up the basic structure using React.js. The key requirement was creating an interactive Kanban board that fetches data from an external API and displays it in different groupings (status, user, priority).<br />
                <em>Challenges faced:</em> Without modern styling libraries, I had to focus heavily on writing efficient, clean, and responsive CSS from scratch.
            </p>

            <p>
                <strong>2. Data Fetching and API Integration:</strong><br />
                I connected the app to the <strong>QuickSell API</strong> to fetch tickets and users. Parsing the nested API response took careful planning to ensure data integrity.<br />
                <em>Problem Encountered:</em> Mapping the API response, particularly handling users linked to tickets, took some effort. But after breaking down the response, I successfully implemented a solution.
            </p>

            <p>
                <strong>3. Grouping by Status, Priority, and User:</strong><br />
                Implementing dynamic grouping (by status, user, and priority) involved creating a flexible system that automatically sorted tickets into columns.<br />
                <em>Challenges Overcome:</em> Mapping priority icons and labels required creating custom sets for intuitive visual elements.
            </p>

            <p>
                <strong>4. Adding User-Friendly Features:</strong><br />
                Enhancements such as icons for task status, priority, and adding a dynamic ticket count for each group were crucial. I also added an “Add Ticket” feature for future use.
            </p>

            <p>
                <strong>5. Building a Seamless User Experience:</strong><br />
                I focused on making the board responsive and intuitive across devices, including adding a simple “Back” button for smooth navigation.
            </p>

            <p>
                <strong>Reflection on the Journey:</strong><br />
                Each challenge improved my problem-solving skills. By the end, I had a functional and aesthetic Kanban board and deepened my understanding of React and CSS. I'm confident that these skills will help me excel as a Frontend Engineer at QuickSell.
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
