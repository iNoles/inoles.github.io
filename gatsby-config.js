const path = require('path');

module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: 'https://inoles.github.io',
    // Your Name
    name: 'Jonathan Steele',
    // Main Site Title
    title: 'Jonathan Steele | Software Engineer',
    // Description that goes under your name in main bio
    description: 'Software Engineer from Florida',
    // Optional: Github account URL
    github: 'https://github.com/inoles',
    // Optional: LinkedIn account URL
    linkedin: 'https://www.linkedin.com/in/jonathansoftwaredeveloper',
    // Content of the About Me section
    about:
      'Versatile Software Engineer with expertise in mobile and desktop development. Proven ability to design and deliver robust, scalable solutions. Proficient in diverse technologies, committed to staying current, and adept at problem-solving in collaborative environments.',
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.resolve('content'),
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-CVE0ZBT5L4', // Google Analytics / GA
        ],
      },
    },
    {
      resolve: 'gatsby-source-github-api',
      options: {
        // token: required by the GitHub API
        token: `${process.env.GATSBY_PORTFOLIO_GITHUB_TOKEN}`,
        // GraphQLquery: defaults to a search query
        graphQLQuery: `query ($author: String = "", $userFirst: Int = 0) {
          user(login: $author) {
            repositories(first: $userFirst, orderBy: {field: STARGAZERS, direction: DESC} privacy: PUBLIC, isFork: false) {
              edges {
                node {
                  name
                  description
                  url
                  forkCount
                  stargazers {
                    totalCount
                  }
                }
              }
            }
          }
        }`,
        // variables: defaults to variables needed for a search query
        variables: {
          userFirst: 8,
          author: 'iNoles',
        },
      },
    },
  ],
};
