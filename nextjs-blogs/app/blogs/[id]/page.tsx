import { notFound } from 'next/navigation';
import { getBlogById } from '../../services/blogs';
import { increaseBlogLikes } from '@/app/actions/blogs';

const BlogPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const blog = await getBlogById(Number(id));

  if (!blog) {
    notFound();
  }

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.author}</p>
      <p>{blog.url}</p>
      <form action={increaseBlogLikes}>
        <input type="hidden" name="id" value={blog.id} />
        <button type="submit">{blog.likes} likes</button>
      </form>
    </div>
  );
};

export default BlogPage;
