import { useStaticQuery, graphql } from "gatsby";
import React from "react";

interface SEOTypes {
  title?: string
}

export function SEO({ title }: SEOTypes) {
    const { site } = useStaticQuery(graphql`
        query {
            site {
              siteMetadata {
                title
                description
            }
        }
    }`);

    const metaDescription = site.siteMetadata.description;
    const defaultTitle = site.siteMetadata?.title;
    const finalTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
      
    return (
      <>
        <html lang="en" />
        <title>{finalTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="og:title" content={finalTitle} />
        <meta name="og:description" content={metaDescription} />
        <meta name="og:type" content="website" />
      </>
    );
}