export type FrontMatterBookSummariesType = {
  title: string;
  description: string;
  author: string;
  intro: string;
  slug: string;
  imageUniqueIdentifier;
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
  imageUniqueIdentifier: string;
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
  data: {
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
    readingTime: {
      text: string;
    };
  };
};
