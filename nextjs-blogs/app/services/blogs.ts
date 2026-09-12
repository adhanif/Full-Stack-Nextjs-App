import { desc, eq, sql } from 'drizzle-orm';
import { db } from '../../db';
import { blogs } from '../../db/schema';

export const addBlog = (title: string, author: string, url: string) => {
  return db.insert(blogs).values({ title, author, url, likes: 0 });
};
export const getBlogById = (id: number) => {
  return db.query.blogs.findFirst({ where: eq(blogs.id, id) });
};
export const increaseLikes = (id: number) => {
  return db
    .update(blogs)
    .set({ likes: sql`${blogs.likes} + 1` })
    .where(eq(blogs.id, id));
};
export const getBlogs = async () => {
  return db.query.blogs.findMany({
    orderBy: desc(blogs.likes),
  });
};
