import React, { Component } from 'react';
import './App.css';
import TimelineCard from './components/TimelineCard';
import Timeline from './components/Timeline';
import Wall from './components/Wall';
import wall from './components/Wall';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Wall />
        <Timeline>
          <TimelineCard title="Software Development Engineer – Intern"
            org="Advancing Technologies"
            duration="February 2021 – May 2021"
            place="Orlando, Florida"
            description="Develop an android mobile application that provides performance analytics to athletes in combat sports. Implement components that establish connectivity between the app, wearable device, and analytics engine" />
          <TimelineCard title="Information Technology Intern"
            org="FedEx Services"
            duration="August 2020 - November 2020"
            place="Collierville, Tennessee"
            description="Design and develop a software solution that supports the organization’s transition to Software Defined Networks. Participate in agile ceremonies and meetings with different stakeholders to gather requirements. Provide presentations to management to encourage the usage of the tool" />
          <TimelineCard title="Master's Degree, Computer Science"
            org="University of Central Florida"
            duration="August 2019 - May 2021"
            place="Orlando, Florida"
            description="Design and Analysis of Algorithms. Distributed Database Concepts. Advanced Computer Architecture. Machine Learninig. Natural Language Processing. Data Visualization Techniques" />
          <TimelineCard title="Software Engineer"
            org="Mphasis"
            duration="March 2015 - July 2019"
            place="Bengaluru, India"
            description="Designed and developed software components for a windows desktop application, FedEx Ship Manager, an end-to-end shipping application. Developed new features of the application that improved user experience, increased customer adoption and enabled product rationalization. Designed and developed a web application, an interface to the TFS version control web API; empowered the testing team to effortlessly track the data file changes in every new build and saved 2% of the team’s effort per day. Designed and developed a unit test execution tool to fit into the architecture that was employed; helped developers to test their code readily with its ability to isolate each test module’s execution environment and effortlessly owing to its user-friendly setup. Spearheaded a team of 3 for a unit testing project; achieved 70% code coverage and a significant improvement in software quality and build turnover time. Designed and developed an application to decrypt and display the content of an application data file used by multiple development and testing teams to analyze bugs; improved teams’ efficiency in detecting and fixing bugs. Worked on a Proof of Concept for developing a voice interface to the FedEx Tracking Web API using Alexa skill kit; presented the organization with a new opportunity to develop a voice driven app as an interface to tracking service. Awarded the summit award twice in a row for my contribution to the team and the organization’s innovation portal" />
          <TimelineCard title="Bachelor's Degree, Telecommunication Engineering"
            org="Visveswaraya Technological University"
            duration="August 2010 - July 2014"
            place="Bengaluru, India"
            description="" />
        </Timeline>

      </div>
    );
  }
}

export default App;
