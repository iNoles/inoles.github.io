import React from "react";
import Section from "./section";
import SummaryItem from "./summaryItem";
import { ReturnValue } from "../site-metadata";

const SectionSkills = ({ allSkillsYaml }: ReturnValue) => {
  const skills = allSkillsYaml?.nodes ?? [];
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
