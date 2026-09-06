import Link from 'next/dist/client/link';
import { getBlogs } from '../services/blogs';

const Blogs = () => {
  const blogs = getBlogs();

  return (
    <div>
      <h1>Blogs</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
