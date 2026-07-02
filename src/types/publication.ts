export type PublicationType = "Research Paper" | "Book Chapter";

export interface Publication {
  id: string;
  title: string;
  publisher: string;
  type: PublicationType;
  url?: string;
}
