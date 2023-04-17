import React from 'react';
import Section from './section';
import SummaryItem from './summaryItem';
import { ReturnValue } from '../site-metadata';

const SectionProjects = ({ allProjectsYaml }: ReturnValue) => {
  var projects = allProjectsYaml?.nodes ?? [];
  if (!projects.length) return null;

  return (
    <Section title="Projects">
      {projects.map((project) => (
        <SummaryItem
          key={project.name}
          name={project.name}
          description={project.description}
          link={project.link}
        />
      ))}
    </Section>
  );
};

export default SectionProjects;