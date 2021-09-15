import Header from "../components/p-1/Header";
import Head from "next/head";
import BlogCard from "../components/p-1/BlogCard";
import Footer from "../components/p-1/Footer";
import blogModal from "../components/p-1/Modal/Blog.model";

const blog = () => {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <Header props="blog" />
      <main>
        <div className="flex justify-center items-center px-8 md:px-0">
          <div className="md:w-2/4 space-y-10">
            <h2 className="font-bold text-3xl mt-24 mb-14">Blog</h2>
            {blogModal.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default blog;
