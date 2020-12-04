import fs from 'fs';
import path from 'path';

// *_PATH is useful when you want to get the path to a specific file
export const INTERVIEW_PATH = path.join(process.cwd(), 'src/posts/interviews');
export const ARTICLE_PATH = path.join(process.cwd(), 'src/posts/articles');
// export const INTERVIEW_PATH =
//   'https://github.com/adamdrake210/pbt_posts_content/blob/master/posts/interviews';

// interviewFilePaths is the list of all mdx files inside the INTERVIEW_PATH directory
export const interviewFilePaths = fs
  .readdirSync(INTERVIEW_PATH)
  // Only include md(x) files
  .filter(path => /\.mdx?$/.test(path));

// interviewFilePaths is the list of all mdx files inside the INTERVIEW_PATH directory
export const articleFilePaths = fs
  .readdirSync(ARTICLE_PATH)
  // Only include md(x) files
  .filter(path => /\.mdx?$/.test(path));
