import fs from 'fs';
import path from 'path';

// INTERVIEW_PATH is useful when you want to get the path to a specific file
export const INTERVIEW_PATH = path.join(process.cwd(), 'src/posts/interviews');
// export const INTERVIEW_PATH =
//   'https://github.com/adamdrake210/pbt_posts_content/blob/master/posts/interviews';

// interviewFilePaths is the list of all mdx files inside the INTERVIEW_PATH directory
export const interviewFilePaths = fs
  .readdirSync(INTERVIEW_PATH)
  // Only include md(x) files
  .filter(path => /\.mdx?$/.test(path));
