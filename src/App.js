import React, { Component } from 'react';
import './App.css';
import TimelineCard from './components/TimelineCard';
import Timeline from './components/Timeline';
import Wall from './components/Wall';
import wall from './components/Wall';
import data from '../src/data.json';
import timeline from './components/Timeline';

class App extends Component {
  render() {

    let timelineItems = data.timeline.map((timeEntry) => {
      return <TimelineCard title={timeEntry.title}
        org={timeEntry.org}
        duration={timeEntry.duration}
        place={timeEntry.place}
        description={timeEntry.description} />
    });


    return (
      <div className="App">
        <Wall />
        <Timeline>
          {timelineItems}
        </Timeline>

      </div>
    );
  }
}

export default App;
