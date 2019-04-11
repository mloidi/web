import React, { Component } from 'react';

import { OfflineService } from './service/resume.service';
import {
  SectionTitle,
  SectionSubtitle,
  SectionContent,
  PageDiv,
  study
} from './style/Style';
import Study from './common/Study';

export default class Education extends Component {
  state = {
    items: {}
  };

  componentDidMount() {
    this.setState({
      items: OfflineService.getItemsByType(study)
    });
  }

  render() {
    return (
      <PageDiv id="timeline">
        <SectionTitle>Education</SectionTitle>
        <SectionSubtitle />
        <SectionContent>
          {Object.keys(this.state.items).map(key => (
            <Study key={key} item={this.state.items[key]} />
          ))}
        </SectionContent>
      </PageDiv>
    );
  }
}
