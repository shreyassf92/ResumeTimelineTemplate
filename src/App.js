import React, { Component, useRef } from 'react';
import './App.css';
import TimelineCard from './components/TimelineCard';
import Timeline from './components/Timeline';
import Wall from './components/Wall';
import data from '../src/data.json';
import ProjectCard from './components/ProjectCard';
import ProjectCarousel from './components/ProjectCarousel';

class App extends Component {

  constructor() {
    super();

    this.container = React.createRef(null);
    this.state = {
      showProject: false
    }
  }

  componentDidMount() {

    document.addEventListener('scroll', () => {

      if (!this.state.showProject)
        if (window.scrollY >= this.container.current.children[1].offsetHeight) {
          this.setState({ showProject: true });
        }

    });

  }

  render() {
    let n = 0;
    let timelineItems = data.timeline.map((timeEntry) => {
      return <TimelineCard key={n++} {...timeEntry} />
    });

    n = 0;
    let projectCardItems = data.projects.map((projCard) => {
      return <ProjectCard key={n++} {...projCard} />
    });

    return (
      <div className="App" ref={this.container}>
        <Wall />

        <Timeline>
          {timelineItems}
        </Timeline>

        {this.state.showProject &&
          <ProjectCarousel>
            {projectCardItems}
          </ProjectCarousel>
        }
      </div>
    );
  }
}

export default App;
