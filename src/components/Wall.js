import React from 'react';
import Classes from './Wall.css';
import data from '../data.json';


const wall = () => {
    return (
        <div className={Classes.container}>
            <div className={Classes.maintext}>
                <p className={Classes.name}>{data.name}</p>
                <p className={Classes.message}>{data.tagline}</p>
                <div className={Classes.contact}>
                    <p>{data.emailid}</p>
                    <p>|</p>
                    <p>{data.phone}</p>
                </div>
            </div>
            <div className={Classes.about}>
                <p>I started my career as a <span>Software Engineer</span> at Mphasis, India, after graduating with a <span>Bachelor degree</span> in Telecommunication Engineering. I have experience in different programming languages like C#, Java, Python, and JavaScript, with a background in developing software components in the backend and frontend for desktop, mobile, and web applications.</p>
                <p>I am currently pursuing <span>Master's in Computer Science</span> at the University of Central Florida, and graduating in May 2021. I have studied subjects like Algorithm design and analysis, Software Engineering, Database technologies, Machine Learning, and Natural Language Processing. I am currently working as a <span>Software Development Engineer - Intern</span> at a sports performance analytics startup, Advancing Technologies. My primary responsibilities are to develop the user interface for the Android/IOS app and develop software components that establish connectivity between the wearable device and the analytic engine. Previously, I worked at FedEx Services as <span>Information Technology Intern</span> on an automation project for Network Engineering Team. My responsibility was to design and develop an automation solution using python and REST API to solve the problem faced by network engineers at the organization. During my internship experiences, I have demonstrated the ability to learn new technology in a completely new domain and be productive in a short period, apply software programming skills, effectively communicate ideas, and effortlessly collaborate and deliver as a team.</p>
            </div>
            <div className={Classes.personalInfo}>
                <a href={data.links.linkedin} target="_blank">LinkedIn</a>
                <a href={data.links.gitrepo} target="_blank">Git Repo</a>
            </div>
        </div>
    );
};

export default wall;
