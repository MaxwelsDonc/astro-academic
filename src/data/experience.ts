export interface ExperienceItem {
  date: string;
  title: string;
  company: string;
  description: string;
}

const experience: ExperienceItem[] = [
  {
    date: "2024.06 – 2024.09",
    title: "Research Intern",
    company: "Company Name",
    description: "Worked on XYZ project. Built ABC framework for downstream analysis.",
  },
];

export default experience;
