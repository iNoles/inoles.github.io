module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://inoles.github.io`,
    // Your Name
    name: 'Jonathan Steele',
    // Main Site Title
    title: `Jonathan Steele | Software Developer`,
    // Description that goes under your name in main bio
    description: `Software Developer from Florida`,
    // Optional: Github account URL
    github: `https://github.com/inoles`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/jonathan-steele`,
    // Content of the About Me section
    about: `Experienced software developer with a 4.7-star app store rating on iOS and Android. Improved app performance by 30% and reduced project timelines by 15%. Enhanced team productivity by 20% with Python scripting. Committed to achieving results.`
  },
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/`
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-CVE0ZBT5L4", // Google Analytics / GA
        ],
      }
    },
  ]
};