import React from 'react';
import Section from './section';
import SummaryItem from './summaryItem';

const SectionSkills = ({ site }: ReturnValue) => {
  const skills = site.siteMetadata.skills;
  return (
    <Section title="Skills">
      {skills.map((skill) => (
        <SummaryItem
          key={skill.name}
          name={skill.name}
          description={skill.description}
        />
      ))}
    </Section>
  );
};

export default SectionSkills;