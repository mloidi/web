import React, { Component } from 'react';

import { OfflineService } from './service/resume.service';
import {
  SectionTitle,
  SectionSubtitle,
  SectionContent,
  PageDiv
} from './style/Style';
import Skill from './common/Skill';

export default class Skills extends Component {
  state = {
    skills: []
  };

  componentDidMount() {
    this.setState({
      skills: OfflineService.getSkills()
    });
  }

  render() {
    return (
        <PageDiv id="skills">
          <SectionTitle>Skills</SectionTitle>
          <SectionSubtitle />
          <SectionContent>
            {this.state.skills.map(skill => (
              <div key={skill.id}>
                <Skill skill={skill} />
              </div>
            ))}
          </SectionContent>
        </PageDiv>
    );
  }
}
