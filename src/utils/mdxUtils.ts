import fs from 'fs';
import path from 'path';

// *_PATH is useful when you want to get the path to a specific file
export const INTERVIEW_PATH = path.join(process.cwd(), 'src/posts/interviews');
export const ARTICLE_PATH = path.join(process.cwd(), 'src/posts/articles');
export const BOOK_SUMMARY_PATH = path.join(
  process.cwd(),
  'src/posts/book-summaries',
);

// export const INTERVIEW_PATH =
//   'https://github.com/adamdrake210/pbt_posts_content/blob/master/posts/interviews';
const isMdx = () => {
  return fileName => /\.mdx?$/.test(fileName);
};

// interviewFilePaths is the list of all mdx files inside the INTERVIEW_PATH directory
export const interviewFilePaths = fs
  .readdirSync(INTERVIEW_PATH)
  // Only include md(x) files
  .filter(isMdx);

// interviewFilePaths is the list of all mdx files inside the ARTICLE_PATH directory
export const articleFilePaths = fs
  .readdirSync(ARTICLE_PATH)
  // Only include md(x) files
  .filter(isMdx);

// bookSummaryFilePaths is the list of all mdx files inside the BOOK_SUMMARY_PATH directory

const folderNames = fs.readdirSync(BOOK_SUMMARY_PATH).map(folder => {
  return folder;
});

export const bookSummaryFilePaths = folderNames.map(folderName => {
  const FOLDER_PATH = path.join(
    process.cwd(),
    `src/posts/book-summaries/${folderName}`,
  );
  const mdxFiles = fs.readdirSync(FOLDER_PATH).filter(isMdx);

  const concatArray = mdxFiles.map(mdxFile => {
    return `${folderName}/${mdxFile}`;
  });
  return concatArray;
});

// TODO
// Reading Time implementation
// Refactor getStaticProps in pages/index.tsx
// Check sitemap when live
// Update Types run tsc
