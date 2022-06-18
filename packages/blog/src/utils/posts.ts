/**
 * Be sure that use this file within server side rendering functions e.g. getStaticPaths
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// process.cwd() will return the root directory of projcet
const postsDirectory = path.resolve(process.cwd(), 'src', 'posts');

export function getAllBlogPostPaths() {
  const filesInPostDir = fs.readdirSync(postsDirectory);

  const allPostData = filesInPostDir
    .filter((post) => post.endsWith('.mdx')) // Select mdx files
    .map((post) => {
      const pid = post.replace('/\.mdx$/', '');

      // Read markdown file as string
      const fullPath = path.resolve(postsDirectory, post);

      console.log(fullPath);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const { data } = matter(fileContents);

      // Combine the data with the id
      return {
        pid,
        ...data,
       };
  });

  return allPostData;
}
