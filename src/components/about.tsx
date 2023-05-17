import React from 'react';
import Section from './section';
import { ReturnValue } from '../site-metadata';

const SectionAbout = ({ site }: ReturnValue) => {
  const about = site?.siteMetadata.about
  return (
    <Section title="About Me">
      <div className="mb-6">
        <p>{about}</p>
      </div>
    </Section>
  );
};

export default SectionAbout;