import React from 'react';
import Section from './section';
import SummaryItem from './summaryItem';
import { ReturnValue } from '../site-metadata';

const SectionExperience = ({ allWorkHistoryYaml }: ReturnValue) => {
  const experience = allWorkHistoryYaml?.nodes ?? [];
  if (!experience.length) return null;
  
  return (
    <Section title="Experience">
      {experience.map((item) => (
        <SummaryItem
          key={item.name}
          name={item.name}
          date={item.date}
          description={item.description}
          link={item.link}
        />
      ))}
    </Section>
  );
};

export default SectionExperience;
