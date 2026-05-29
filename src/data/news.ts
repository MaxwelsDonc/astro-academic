export interface NewsItem {
  date: string;
  text: string;
  link?: string;
  linkText?: string;
  suffix?: string;
}

const news: NewsItem[] = [
  {
    date: "2025.06",
    text: "Started my Ph.D. at Your University.",
  },
  {
    date: "2025.01",
    text: "Our paper was accepted at ",
    link: "https://example.com",
    linkText: "Conference Name",
    suffix: ".",
  },
];

export default news;
