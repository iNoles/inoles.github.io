export type ReturnValue = {
    site?: {
      siteMetadata: {
        about: string,
        twitter?: string,
        name: string,
        github?: string,
        linkedin?: string,
        description: string
      },
    },
    allProjectsYaml ?: {
      nodes: {
        description: string,
        name: string,
        link ?: string
      }[]
    },
    allEducationsYaml ?: {
      nodes: {
        id: number,
        description: string,
        name: string,
        link ?: string
      }[]
    }
    allWorkHistoryYaml ?: {
      nodes: {
        description: string,
        name: string,
        link ?: string
      }[]
    },
    allSkillsYaml ?: {
      nodes: {
        description: string,
        name: string,
      }[]
    }
  }