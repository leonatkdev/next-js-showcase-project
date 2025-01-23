
// Dynamic route component
const BlogPage = ({ params }) => {
  return (
    <div>
      <h1>Blog Slug: {params.slug}</h1>
    </div>
  );
};

export default BlogPage;
