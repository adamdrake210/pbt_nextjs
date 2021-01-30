type FrontMatter = {
  layout: string;
  slug: string;
  category: string;
};

export const createPostUrl = (frontMatter: FrontMatter) => {
  const { layout, slug, category } = frontMatter;
  if (layout) {
    return `/${layout}s/${slug}`;
  }
  return `/book-summaries/${category}/${slug}`;
};
