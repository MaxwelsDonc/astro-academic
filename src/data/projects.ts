export interface ProjectItem {
  date: string;
  role: string;
  title: string;
  description: string;
  link?: string;
}

const projects: ProjectItem[] = [
  {
    date: "2020 – 2023",
    role: "Core Researcher",
    title: "Your Project Title",
    description: "A brief description of what you did and the impact.",
  },
];

export default projects;
