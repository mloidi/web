import React from 'react';

import ProgressBar from './ProgressBar';
import Icon from '../common/Icon';
import { SkillBox, SkillIcon, SkillText } from '../style/Style';

const SkillLevel = props => (
  <SkillBox>
    <SkillIcon>
      {props.skill.icon ? (
        <Icon icon={props.skill.icon} />
      ) : (
        <SkillText>{props.skill.description}</SkillText>
      )}
    </SkillIcon>
    <ProgressBar level={props.skill.level} />
  </SkillBox>
);

export default SkillLevel;
