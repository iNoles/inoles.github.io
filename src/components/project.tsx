import React from 'react';
import Section from './section';
import SummaryItem from './summaryItem';
import { graphql, useStaticQuery } from 'gatsby';

const SectionProjects = () => {
  const projectData = useStaticQuery(graphql`
  query {
    githubData {
      data {
        user {
          repositories {
            edges {
              node {
                description
                name
                url
                stargazers {
                  totalCount
                }
                forkCount
              }
            }
          }
        }
      }
    }
  }`);
  return (
    <Section title="Projects">
      {projectData.githubData.data.user.repositories.edges.map((project) => (
        <SummaryItem
          key={project.node.name}
          name={project.node.name}
          description={project.nodes.description}
          link={project.url}
        />
      ))}
    </Section>
  );
};

export default SectionProjects;