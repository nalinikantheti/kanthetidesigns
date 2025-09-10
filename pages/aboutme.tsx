import React from 'react';

export const AboutMe: React.FC = () => {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>About Me</h1>
            <p>Hello! I'm Nalini, a passionate developer with a love for creating beautiful and functional web applications.</p>
            <p>In my spare time, I enjoy exploring new technologies, reading, and hiking.</p>
            <h2>Skills</h2>
            <ul>
                <li>JavaScript / TypeScript</li>
                <li>React / Next.js</li>
                <li>Node.js / Express</li>
                <li>CSS / Sass</li>
            </ul>
            <h2>Contact</h2>
            <p>Email: nalinikant@example.com</p>
        </div>
    );
};

export default AboutMe;