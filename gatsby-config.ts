import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://inoles.github.io/`,
    // Your Name
    name: 'Jonathan Steele',
    // Main Site Title
    title: `Jonathan Steele | Software Developer`,
    // Description that goes under your name in main bio
    description: `Software Developer from Florida`,
    // Optional: Twitter account handle
    twitter: ``,
    // Optional: Github account URL
    github: `https://github.com/inoles`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/jonathan-steele/`,
    // Content of the About Me section
    about: `I'm a motivated Junior Software Developer with experience building and scaling mobile applications and technical support. I'm also passionate about open-source contributors, working in high-impact environments, and contributing to growing development teams by helping build great products.`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/`
      }
    },
  ]
};

export default config;
