import React from 'react';
import { Helmet } from 'react-helmet';

export interface SEOProps {
  description?: string;
  lang?: string;
  meta?: [];
  title: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description = '',
  lang = 'en',
  meta = [],
}) => {
  const metaDescription = description || '{{cookiecutter.project_description}}';
  const siteTitle = '{{cookiecutter.project_name}}';
  const author = 'Sophie Geyer';

  return ({% raw %}
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${siteTitle}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />{% endraw %}
  );
};
