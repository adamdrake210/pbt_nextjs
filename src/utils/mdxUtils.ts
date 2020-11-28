import fs from 'fs';
import path from 'path';

// INTERVIEW_PATH is useful when you want to get the path to a specific file
export const INTERVIEW_PATH = path.join(process.cwd(), 'src/posts/interviews');

// interviewFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const interviewFilePaths = fs
  .readdirSync(INTERVIEW_PATH)
  // Only include md(x) files
  .filter(path => /\.mdx?$/.test(path));
