import { desc, eq, sql } from 'drizzle-orm';
import { db } from '../../db';
import { blogs } from '../../db/schema';

export const addBlog = async (title: string, author: string, url: string) => {
  const user = await db.query.users.findFirst({
    orderBy: sql`RANDOM()`,
  });

  if (!user) {
    throw new Error('No users found to attach the new blog to.');
  }

  return db
    .insert(blogs)
    .values({ title, author, url, likes: 0, userId: user.id });
};

export const getBlogById = async (id: number) => {
  return db.query.blogs.findFirst({ where: eq(blogs.id, id) });
};

export const increaseLikes = async (id: number) => {
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
