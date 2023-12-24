import React from 'react';
import Section from './section';
import SummaryItem from './summaryItem';
import { ReturnValue } from '../site-metadata';

const SectionEducation = ({ allEducationsYaml }: ReturnValue) => {
  const education = allEducationsYaml?.nodes ?? [];
  if (!education.length) return null;

  return (
    <Section title="Education">
      {education.map((item) => (
        <SummaryItem
          key={item.id}
          date={item.date}
          name={item.name}
          description={item.description}
          link={item.link}
        />
      ))}
    </Section>
  );
};

export default SectionEducation;