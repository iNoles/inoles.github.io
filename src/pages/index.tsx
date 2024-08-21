import { HeadFC, PageProps, graphql } from "gatsby";
import React from "react";
import SectionAbout from "../components/about";
import SectionExperience from "../components/experience";
import Header from "../components/header";
import Layout from "../components/layout";
import SectionProjects from "../components/project";
import SectionSkills from "../components/skills";
import { SEO } from "../components/seo";
import SectionEducation from "../components/education";
import { ReturnValue } from "../site-metadata";

const Index = ({ data }: PageProps<ReturnValue>) => {
  return (
    <Layout>
      <Header site={data.site} />
      <SectionAbout site={data.site} />
      <SectionProjects />
      <SectionEducation allEducationsYaml={data.allEducationsYaml} />
      <SectionExperience allWorkHistoryYaml={data.allWorkHistoryYaml} />
      <SectionSkills allSkillsYaml={data.allSkillsYaml} />
    </Layout>
  );
};

export default Index;

export const Head: HeadFC<ReturnValue> = () => <SEO />;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
        about
        github
        linkedin
      }
    }
    allEducationsYaml {
      nodes {
        id
        name
        description
        date
      }
    }
    allWorkHistoryYaml {
      nodes {
        name
        description
        date
      }
    }
    allSkillsYaml {
      nodes {
        name
        description
      }
    }
  }
`;
