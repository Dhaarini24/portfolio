export interface Certification {
  id: string;
  title: string;
  issuer: string;
  url?: string;
  /** Anchor credential to visually highlight. */
  featured?: boolean;
}
