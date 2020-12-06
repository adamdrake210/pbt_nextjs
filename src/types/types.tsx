export type FrontMatterBookSummaries = {
  title: string;
  description: string;
  author: string;
  intro: string;
  slug: string;
  imageUniqueIdentifier: string;
  category: string;
  tags: string;
  publishedDate: string;
  published: boolean;
  writtenBy: string;
  readTime: {
    text: string;
  };
};

export type FrontMatterArticles = {
  title: string;
  description: string;
  intro: string;
  slug: string;
  imageUniqueIdentifier: string;
  tags: string;
  publishedDate: string;
  published: boolean;
  writtenBy: string;
  layout: string;
  readTime: {
    text: string;
  };
};

export type FrontMatterInterviews = {
  title: string;
  description: string;
  intro: string;
  slug: string;
  imageUniqueIdentifier: string;
  category: string;
  tags: string;
  publishedDate: string;
  published: boolean;
  layout: string;
  readTime: {
    text: string;
  };
};

export type BookSummaryContentFrontMatter = {
  content: string;
  data: FrontMatterBookSummaries;
  filePath?: string;
};

export type InterviewsContentFrontMatter = {
  content: string;
  data: FrontMatterInterviews;
  filePath?: string;
};
export type ArticlesContentFrontMatter = {
  content: string;
  data: FrontMatterArticles;
  filePath?: string;
};
