import React from "react";
import BlogData from "../Data/BlogData";
import BlogCard from "../Components/BlogCard";
const Blogs = () => {
  return (
    <section className="w-screen min-h-screen px-5 md:px-12 lg:px-20 py-10 text-white">
      <div
        style={{
          background:
            "radial-gradient(circle, rgba(0, 25, 43, 1) 0%, rgba(0, 25, 43, 0.94) 0%, rgba(0, 0, 0, 1) 100%, rgba(72, 202, 228, 0.79) 100%)",
        }}
        className="w-full rounded-[500px] flex-col flex justify-center items-center py-10"
      >
        <h1 className="text-2xl sm:text-5xl font-semibold">ButtonJS Blogs</h1>
        <p className="md:text-lg text-[12px] text-center text-gray-400 mt-1 font-semibold">
          Use them in UI/UX, Tailwind CSS, JavaScript, React, Next.js, and
          more...
        </p>
      </div>
      <div className="flex flex-col sm:grid grid-cols-1 sm:grid-cols-2 items-center justify-center md:grid-cols-3 lg:grid-cols-4 mt-10 gap-5">
        {BlogData.map((blogData, idx) => {
          return <BlogCard BlogData={blogData} key={idx} />;
        })}
      </div>
    </section>
  );
};

export default Blogs;
