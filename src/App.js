import React, { Component } from 'react';
import './App.css';
import TimelineCard from './components/TimelineCard';
import Timeline from './components/Timeline';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Timeline>
          <TimelineCard title="Software Engineer"
            org="Mphasis"
            duration="March 2015 - July 2019"
            place="Bengaluru, India"
            description="point1.point2.point3" />
          <TimelineCard title="Software Engineer"
            org="Mphasis"
            duration="March 2015 - July 2019"
            place="Bengaluru, India"
            description="point1.point2.point3" />
          <TimelineCard title="Software Engineer"
            org="Mphasis"
            duration="March 2015 - July 2019"
            place="Bengaluru, India"
            description="point1.point2.point3" />
        </Timeline>

      </div>
    );
  }
}

export default App;
