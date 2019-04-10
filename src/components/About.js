import React, { Component } from 'react';

import { OfflineService } from './service/resume.service';
import {
  SectionTitle,
  SectionSubtitle,
  SectionContent,
  PageDiv,
  SkillTable
} from './style/Style';
import Skill from './common/Skill';

export default class About extends Component {
  state = {
    about: {},
    skills: []
  };

  componentDidMount() {
    this.setState({
      about: OfflineService.getAbout(),
      skills: OfflineService.getSkills()
    });
  }

  render() {
    return (
      <React.Fragment>
        <PageDiv id="about">
          <SectionTitle>About me</SectionTitle>
          <SectionSubtitle>Skills</SectionSubtitle>
          <SectionContent>
            <SkillTable>
              {this.state.skills.map(skill => (
                <div key={skill.id}>
                  <Skill skill={skill} />
                </div>
              ))}
            </SkillTable>
          </SectionContent>
          <SectionSubtitle />
          <SectionContent>
            {this.state.about.descriptions &&
              this.state.about.descriptions.map(description =>
                description.line === 1 ? (
                  <span key={description.line}>
                    <strong>{description.text}</strong>
                  </span>
                ) : (
                  <React.Fragment key={description.line}>
                    <span>{description.text}</span>
                    <br />
                    <br />
                  </React.Fragment>
                )
              )}
          </SectionContent>
        </PageDiv>
      </React.Fragment>
    );
  }
}