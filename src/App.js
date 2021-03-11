import React, { Component } from 'react';
import './App.css';
import TimelineCard from './components/TimelineCard';
import Timeline from './components/Timeline';
import Wall from './components/Wall';
import data from '../src/data.json';
import ProjectCard from './components/ProjectCard';
import ProjectCarousel from './components/ProjectCarousel';

class App extends Component {
  render() {

    let timelineItems = data.timeline.map((timeEntry) => {
      return <TimelineCard title={timeEntry.title}
        org={timeEntry.org}
        duration={timeEntry.duration}
        place={timeEntry.place}
        description={timeEntry.description} />
    });

    let projectCardItems = data.projects.map((projCard) => {
      return <ProjectCard title={projCard.title}
        description={projCard.description}
        link={projCard.link} />
    });


    return (
      <div className="App">
        <Wall />

        <Timeline>
          {timelineItems}
        </Timeline>

        <ProjectCarousel>
          {projectCardItems}
        </ProjectCarousel>
      </div>
    );
  }
}

export default App;
