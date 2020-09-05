export type FrontMatterBookSummariesType = {
  title: string;
  description: string;
  author: string;
  intro: string;
  slug: string;
  category: string;
  tags: string;
  publishedDate: string;
  published: boolean;
  writtenBy: string;
  readingTime: {
    text: string;
  };
};

export type FrontMatterArticlesType = {
  title: string;
  description: string;
  intro: string;
  slug: string;
  tags: string;
  publishedDate: string;
  published: boolean;
  writtenBy: string;
  layout: string;
  readingTime: {
    text: string;
  };
};

export type FrontMatterInterviewsType = {
  title: string;
  description: string;
  intro: string;
  slug: string;
  category: string;
  tags: string;
  publishedDate: string;
  published: boolean;
  layout: string;
  readingTime: {
    text: string;
  };
};
