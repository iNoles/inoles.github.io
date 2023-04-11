import React from 'react';
import Section from './section';
import SummaryItem from './summaryItem';

const SectionEducation = ({ site }: ReturnValue) => {
  const education = site.siteMetadata.education
  if (!education.length) return null;

  return (
    <Section title="Education">
      {education.map((item) => (
        <SummaryItem
          key={item.id}
          name={item.name}
          description={item.description}
          link={item.link}
        />
      ))}
    </Section>
  );
};

export default SectionEducation;