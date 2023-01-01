import React from 'react';

import { Container, Navbar } from 'src/components';

export const Layout: React.FC = ({ children }) => {
  return (
    <Container bgColor="white">
      <Navbar
        title={'{{cookiecutter.project_name}}'}
        links={[['About', '/about']]}
      />
      {% raw %}<div style={{ padding: '2em' }} />{% endraw %}
      {children}
    </Container>
  );
};
