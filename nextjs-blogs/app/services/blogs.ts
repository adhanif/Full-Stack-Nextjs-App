const blogs = [
  {
    id: 1,
    title: 'Getting Started with Next.js',
    author: 'John Doe',
    url: 'https://example.com/nextjs',
    likes: 15,
  },
  {
    id: 2,
    title: 'Understanding React Server Components',
    author: 'Jane Smith',
    url: 'https://example.com/react-server-components',
    likes: 24,
  },
  {
    id: 3,
    title: 'Building a REST API with Node.js',
    author: 'Mike Johnson',
    url: 'https://example.com/nodejs-api',
    likes: 32,
  },
  {
    id: 4,
    title: 'Introduction to TypeScript',
    author: 'Sarah Wilson',
    url: 'https://example.com/typescript',
    likes: 18,
  },
];

let nextId = 5;
export const getBlogs = () => {
  return blogs;
};

export const addBlog = (title: string, author: string, url: string) => {
  blogs.push({ id: nextId++, title, author, url, likes: 0 });
};

export const getBlogById = (id: number) => {
  return blogs.find((blog) => blog.id === id);
};
