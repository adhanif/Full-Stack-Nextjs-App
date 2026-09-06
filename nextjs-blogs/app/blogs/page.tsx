import Link from 'next/link';
import { getBlogs } from '../services/blogs';

const Blogs = async ({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string }>;
}) => {
  const { filter } = await searchParams;

  const blogs = await getBlogs();

  const filteredBlogs = filter
    ? blogs.filter((blog) =>
        blog.title.toLowerCase().includes(filter.toLowerCase()),
      )
    : blogs;
  const descendingOrder = [...filteredBlogs].sort((a, b) => b.likes - a.likes);

  return (
    <div>
      <h1>Blogs</h1>
      <form method="GET">
        <input
          type="text"
          name="filter"
          placeholder="Search blogs by title"
          defaultValue={filter || ''}
        />

        <button type="submit">Search</button>
      </form>
      <ul>
        {descendingOrder.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
