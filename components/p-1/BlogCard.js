const BlogCard = ({ blog }) => {
  return (
    <div className="border-b-2 border-gray-400 pb-6">
      <h2 className="font-bold text-xl">{blog.heading}</h2>
      <div className="flex items-center space-x-4 my-4 font-normal text-lg">
        <p>{blog.date}</p>
        <p className="border-r-2 border-black h-4 " />
        <p className="text-gray-400">{blog.about}</p>
      </div>
      <p className="text-base">{blog.blog}</p>
    </div>
  );
};

export default BlogCard;
