export interface ServiceItem { role: string; text: string; }
export interface ServiceSection { heading: string; items: ServiceItem[]; }

const services: { sections: ServiceSection[] } = {
  sections: [
    {
      heading: "Journal Reviewer",
      items: [
        { role: "Reviewer", text: "Journal Name (Publisher)" },
      ],
    },
  ],
};

export default services;
