export type ReturnValue = {
    site?: {
      siteMetadata: {
        about: string,
        name: string,
        github?: string,
        linkedin?: string,
        description: string
      },
    },
    allEducationsYaml ?: {
      nodes: {
        id: number,
        description: string,
        date: string,
        name: string,
        link ?: string
      }[]
    }
    allWorkHistoryYaml ?: {
      nodes: {
        description: string,
        date: string,
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