import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';

export default function Education() {
  return (
    <section className="education--section" id="myEducations">
        <div className="education-container">
            <h2 className="education-section-heading">My Education's Journey</h2>
        </div>
        <div className="education--section--container">
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2020 - 2021"
                iconStyle={{ background: "#3e497a", color: "#fff" }}
                icon={<SchoolIcon />}
                >
                <h3 className="vertical-timeline-element-title">
                    University College Sedaya International (UCSI)
                </h3><br/>
                <h4> Foundation in arts</h4>
                <p>
                At UCSI University, I completed a foundation program in arts, exploring various art forms and techniques through theoretical learning and practical assignments. 
                This program provided a solid foundation in arts while fostering creativity and critical thinking skills essential for academic and professional pursuits.
                Below are the some of the courses which I partaking in during my study in Foundations:
                </p>
                <ul>
                    <li>Economics</li>
                    <li>Fundamentals of Programming</li>
                    <li>Introduction to Marketing</li>
                    <li>Office Application</li>
                    <li>Quantitative Methods</li>
                    <li>Accounting Practice</li>
                    <li>Computing Essentials</li>
                    <li>Introduction To Probability And Statistics</li>
                    <li>Web Development</li>
                    <li>Human Communication</li>
                    <li>Introduction To Business</li>
                    <li>Mathematical Modelling</li>
                </ul>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2021 - 2024"
                iconStyle={{ background: "red", color: "#fff" }}
                icon={<SchoolIcon />}
                >
                <h3 className="vertical-timeline-element-title">
                    University College Sedaya International (UCSI)
                </h3><br/>
                <h4 className="vertical-timeline-element-subtitle">
                    Bachelor's Degree in Computer Science
                </h4>
                <p>At UCSI University, I earned my Bachelor's degree in Computer Science, delving into programming, algorithms, and software engineering. 
                    Through hands-on projects and industry collaborations, I gained practical experience and honed critical thinking skills crucial for success in the tech industry. 
                    This program laid a solid foundation for my career aspirations in computer science. Below are the some of the courses which I partaking in during my study in Bachelor's Degree:
                </p>
                <ul>
                    <li>Database Management Systems</li>
                    <li>Database Administration</li>
                    <li>Data Structures & Algorithms</li>
                    <li>Object-oriented Programming</li>
                    <li>Application Layer Programming</li>
                    <li>Operating Systems</li>
                    <li>Networking</li>
                    <li>Cloud Computing</li>
                    <li>Web Programming</li>
                    <li>Intelligent Systems</li>
                    <li>Object Oriented Analysis and Design</li>
                    <li>Software Project Management</li>
                    <li>Introduction to Human Computer Interaction</li>
                </ul>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2024"
                iconStyle={{ background: "#e9d35b", color: "#fff" }}
                icon={<SchoolIcon />}
                >
                <h3 className="vertical-timeline-element-title">
                    Coursera
                </h3><br/>
                <h4 className="vertical-timeline-element-subtitle">
                    Front-End Developer - Meta
                </h4>
                <p>I enhanced my studies by taking the Meta Front-End Developer course on Coursera. 
                    This program provided specialized training in front-end development, focusing on HTML, CSS, JavaScript, and React. Through interactive lessons and hands-on projects, 
                    I gained practical experience and industry-relevant skills, preparing me for career advancement in web development.
                    Below are the following courses included in the Meta Front-End Developer program:
                </p>
                <ul>
                    <li>Introduction to Front-End Development</li>
                    <li>Programming with JavaScript</li>
                    <li>Version Control</li>
                    <li>HTML and CSS in depth</li>
                    <li>React Basics</li>
                    <li>Advanced React</li>
                    <li>Principles of UX/UI Design</li>
                    <li>Front-End Developer Capstone</li>
                    <li>Coding Interview Preparation</li>
                </ul>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2024"
                iconStyle={{ background: "green", color: "#fff" }}
                icon={<SchoolIcon />}
                >
                <h3 className="vertical-timeline-element-title">
                    Coursera
                </h3><br/>
                <h4 className="vertical-timeline-element-subtitle">
                    Back-End Developer - Meta
                </h4>
                <p>
                I completed the Meta Back-End Developer course on Coursera, mastering Django and API testing with Insomnia. 
                This certification enhanced my proficiency in back-end development, paving the way for career growth in web application development.
                Below are the following courses included in the Meta Back-End Developer program:
                </p>
                <ul>
                    <li>Introduction to Back-End Development</li>
                    <li>Programming in Python</li>
                    <li>Version Control</li>
                    <li>Introduction to Databases for Back-End Development</li>
                    <li>Django Web Framework</li>
                    <li>APIs</li>
                    <li>The Full Stack</li>
                    <li>Back-End Developer Capstone</li>
                    <li>Coding Interview Preparation</li>
                </ul>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    </section>
  );
}