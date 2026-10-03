export interface Entry {
  title: string;
  subtitle?: string;      // job title, degree type, etc.
  date?: string;
  description: string;
  bullets?: string[];     // experience bullets
  tags?: string[];        // tech stack, coursework, skills
  href?: string;          // repo, live site, external link
  hrefLabel?: string;     // "Source", "Visit", "View" — defaults to "Link"
}