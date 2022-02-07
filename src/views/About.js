import React from 'react';
import Roadmap from '../components/sections/Roadmap';
import Team from "../components/sections/Team";
class About extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Team />
                <Roadmap topDivider />
            </React.Fragment>
        );
    }
}

export default About;
