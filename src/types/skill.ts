export interface Skill {
  name: string;
  /** Optional lucide-react icon name, resolved at render time. */
  icon?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  /** lucide-react icon name for the category. */
  icon: string;
  skills: Skill[];
}
