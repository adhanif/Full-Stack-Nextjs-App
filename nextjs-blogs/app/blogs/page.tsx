import Link from 'next/dist/client/link';
import { getBlogs } from '../services/blogs';

const Blogs = () => {
  const blogs = getBlogs();

  const descendingOrder = blogs.sort((a, b) => b.likes - a.likes);
 
  return (
    <div>
      <h1>Blogs</h1>
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
