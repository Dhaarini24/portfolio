// `icon` fields hold lucide-react icon names (strings), resolved to components
// at render time so the data layer stays free of React imports.

export interface Highlight {
  icon: string;
  title: string;
  description: string;
}

export interface Stat {
  value: number;
  suffix?: string;
  label: string;
  icon: string;
}

export interface Passion {
  label: string;
  icon: string;
}
