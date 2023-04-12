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
    about: `I'm a motivated IT specialist with experience building and scaling mobile applications and technical support. I'm also passionate about open-source contributors, working in high-impact environments, and contributing to growing development teams by helping build great products.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'SpaceXLaunch',
        description:
          'Kotlin Multiplatforms app based on JetBrains Compose, SwiftUI, and Jetpack Compose',
        link: 'https://github.com/iNoles/SpaceXLaunch',
      },
      {
        name: 'KnightFootball-Android',
        description:
          'It is a fan-made Android app based on Kotlin with Jetpack Compose about UCF Football',
        link: 'https://github.com/iNoles/knightsfootballandroid',
      },
      {
        name: 'KnightFootball-iOS',
        description:
          'It is a fan-made iOS app based on Swift with SwiftUI about UCF Football',
        link: 'https://github.com/iNoles/knightfootball-swiftui',
      },
      {
        name: 'TaskList',
        description:
          'A Task application built with Jetpack Compose and SQLDelight',
        link: 'https://github.com/iNoles/TaskList',
      },
      {
        name: 'RSSReader',
        description:
          'An open-source RSS Reader built by React and TailwindCSS',
        link: 'https://inoles.github.io/rss_reader/',
      },
    ],
    education: [
      {
        id:1,
        name: 'Eastern Florida State College',
        description: 'Bachelor of Applied Science in Computer Information System Technology, August 2019-December 2022'
      },
      {
        id:2,
        name: "Eastern Florida State College",
        description: 'Associate of Science in Computer Programming, August 2009 - May 2015'
      }
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'eLifeguard.com',
        description: 'IT Specialist, March 2016 - Present',
        link: '',
      },
      {
        name: 'Brevard Public Schools',
        description: 'IT Support Intern, August 2022 - October 2022',
        link: '',
      },
      {
        name: 'Innovative Routines International',
        description: 'Software Tester Intern, July 2015 - October 2015',
        link: '',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), Dart, Typescript, Node.js, React, Java, Kotlin, Objective-C, C#, Swift',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostreSQL, MySQL, SQLite',
      },
      {
        name: 'Other',
        description:
          'CI / CD (Github Actions), Android, iOS, Xamarin, Flutter, Agile',
      },
    ],
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-postcss"]
};

export default config;
