import { createBlog } from '@/app/actions/blogs';

const NewBlog = () => {
  return (
    <div>
      <form action={createBlog}>
        <div>
          <label>
            Title:
            <input type="text" id="title" name="title" />
          </label>
        </div>
        <div>
          <label>
            author:
            <input type="text" id="author" name="author" />
          </label>
        </div>
        <div>
          <label>
            url:
            <input type="text" id="url" name="url" />
          </label>
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default NewBlog;
