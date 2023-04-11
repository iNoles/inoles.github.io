import React from 'react';
import Section from './section';
import SummaryItem from './summaryItem';

interface ProjectsType {
  projects: {name: string, description: string, link: string}[]
}

const SectionProjects = ({ site }: ReturnValue) => {
  const projects = site.siteMetadata.projects;
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