export interface EducationItem {
  date: string;
  title: string;
  school: string;
  description: string;
}

const education: EducationItem[] = [
  {
    date: "2020.09 – Present",
    title: "Ph.D. Candidate",
    school: "Your University",
    description: "Researching topics in your field. Supervised by Prof. Your Advisor.",
  },
  {
    date: "2015.09 – 2019.06",
    title: "B.Eng.",
    school: "Your University",
    description: "Your undergraduate description.",
  },
];

export default education;
