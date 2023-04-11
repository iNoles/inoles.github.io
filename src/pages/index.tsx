import { HeadFC, PageProps, graphql } from 'gatsby';
import React from 'react';
import SectionAbout from '../components/about';
import SectionExperience from '../components/experience';
import Header from '../components/header';
import Layout from '../components/layout';
import SectionProjects from '../components/project';
import SectionSkills from '../components/skills';
import { SEO } from '../components/seo';
import SectionEducation from '../components/education';

const Index = ({ data } : PageProps<ReturnValue>) => {
  return (
    <Layout>
      <Header site={data.site} />
      <SectionAbout site={data.site} />
      <SectionProjects site={data.site} />
      <SectionEducation site={data.site} />
      <SectionExperience site={data.site} />
      <SectionSkills site={data.site} />
    </Layout>
  );
};

export default Index;

export const Head: HeadFC<ReturnValue> = () => (
  <SEO />
)

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
        about
        twitter
        github
        linkedin
        projects {
          name
          description
          link
        }
        education {
          id
          name
          description
        }
        experience {
          name
          description
          link
        }
        skills {
          name
          description
        }
      }
    }
  }
`;