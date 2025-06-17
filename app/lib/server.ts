import { promises as fs } from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'app/DB/posts.json');

export interface Post {
  id: number;
  title: string;
  body: string;
  createdAt: string;
}



export async function readPosts(): Promise<Post[]> {
  try {
    const data = await fs.readFile(dataFilePath, 'utf8');
    const jsonData = JSON.parse(data);
    return jsonData.posts;
  } catch (error) {
    console.error('Error reading posts:', error);
    return [];
  }
}

export async function writePosts(posts: Post[]): Promise<void> {
  try {
    await fs.writeFile(dataFilePath, JSON.stringify({ posts }, null, 2));
  } catch (error) {
    console.error('Error writing posts:', error);
    throw error;
  }
} 
