export interface HonorItem { date: string; level: string; text: string; }
export interface HonorSection { heading: string; items: HonorItem[]; }

const honors: { sections: HonorSection[] } = {
  sections: [
    {
      heading: "Academic Honors",
      items: [
        { date: "2024", level: "University", text: "Outstanding Graduate Student, Your University." },
      ],
    },
  ],
};

export default honors;
