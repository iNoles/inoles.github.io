import React from 'react';
import Section from './section';
import SummaryItem from './summaryItem';

const SectionExperience = ({ site }: ReturnValue) => {
  const experience = site.siteMetadata.experience
  if (!experience.length) return null;

  return (
    <Section title="Experience">
      {experience.map((item) => (
        <SummaryItem
          key={item.name}
          name={item.name}
          description={item.description}
          link={item.link}
        />
      ))}
    </Section>
  );
};

export default SectionExperience;