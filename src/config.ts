// ============================================
// Site Configuration — edit this file to set up your site.
// ============================================

export const site = {
  title: "Your Name",
  description: "PhD Candidate at Your University",
  url: "https://yourname.github.io",
  lang: "en",
  analyticsId: "",
};

export const author = {
  name: "Your Name",
  avatar: "/images/profile.jpg",
  bio: "Your University",
  location: "City, Country",
  email: "you@university.edu",
  github: "your-github",
  googleScholar: "https://scholar.google.com/citations?user=YOUR_ID",
  orcid: "https://orcid.org/0000-0000-0000-0000",
};

export const navigation = {
  header: [
    { label: "Intro", href: "/about" },
    { label: "Blog", href: "/blog" },
  ],
};

export const homePage = {
  greeting: "Hi, I'm Your Name",
  subtitle: "PhD Candidate at Your University",
  keywords: ["Research Area 1", "Research Area 2"],
};

export const blogPage = {
  title: "Blog",
  subtitle: "Thoughts on research, software, and beyond",
};

export const googleScholar = {
  enabled: false,
  statsUrl: "",
};

export const giscus = {
  repo: "yourname/yourname.github.io",
  repoId: "",
  category: "Blog Comments",
  categoryId: "",
};
