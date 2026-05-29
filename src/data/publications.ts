export interface Paper {
  title: string;
  venue: string;
  paperId: string;
  authors: string;
}

export interface PubSection {
  heading: string;
  papers: Paper[];
}

const publications: { sections: PubSection[] } = {
  sections: [
    {
      heading: "Manuscripts Under Review",
      papers: [
        {
          title: "Your Paper Title Here",
          venue: "VENUE",
          paperId: "USER_ID:XXXXXXXXXXXX",
          authors: "**Your Name**, Co-author Name",
        },
      ],
    },
    {
      heading: "Selected Publications",
      papers: [
        {
          title: "Your Published Paper Title",
          venue: "VENUE YEAR",
          paperId: "USER_ID:XXXXXXXXXXXX",
          authors: "First Author, **Your Name**, Third Author",
        },
      ],
    },
  ],
};

export default publications;
