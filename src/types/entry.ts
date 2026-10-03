export interface Entry {
  title: string;
  subtitle?: string;      // job title, degree type, etc.
  date?: string;
  description: string;
  bullets?: string[];     // experience bullets
  tags?: string[];        // tech stack, coursework, skills
  link?: string;          // repo, live site, external link
}