import React from 'react';
import { HeaderXl } from 'src/components';
import { Layout, SEO } from 'src/containers';

const About: React.FC = () => {
  return (
    <Layout>
      <SEO title="About" />
      <HeaderXl>About {'{{cookiecutter.project_name}}'}</HeaderXl>
      <p>This is a template site made with NextJS.</p>
    </Layout>
  );
};

export default About;
