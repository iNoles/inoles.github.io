type ReturnValue = {
    site: {
      siteMetadata: {
        about: string,
        twitter?: string,
        name: string,
        github?: string,
        linkedin?: string,
        description: string,
        projects: {name: string, description: string, link: string}[],
        experience: {name: string, description: string, link: string}[],
        skills: {name: string, description: string}[],
        education: {id: number, name: string, description: string, link: string}[]
      }
    }
  }