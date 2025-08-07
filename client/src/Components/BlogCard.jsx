const BlogCard = ({ BlogData }) => {
  return (
    <div
      className={`w-[280px] overflow-scroll h-[350px] p-5 text-white bg-gradient-to-br from-[#212121] to-[#212121] border-2 border-transparent rounded-lg flex flex-col cursor-pointer CustomScrollForCards transition-all duration-500 origin-bottom-right hover:rotate-3`}
      style={{
        backgroundImage: `linear-gradient(#212121, #212121), linear-gradient(145deg, transparent 35%, #e81cff, #40c9ff)`,
        backgroundClip: "padding-box, border-box",
        backgroundOrigin: "padding-box, border-box",
      }}
    >
      <div className="flex-1">
        <div className="flex gap-1 text-sm font-semibold">
          <img
          className="w-full h-[150px] object-cover rounded-lg " 
            src={BlogData.blogImg}
            alt=""
          />
        </div>
        <div className="flex gap-2">
          <span className="bg-[#399BAF] mt-2 px-4 py-1 font-semibold text-xs uppercase rounded-full">
          {BlogData.blogTag}
          </span>
        </div>
        <p className="text-2xl font-semibold">
        {BlogData.blogName.slice(0, 30) + "..."}
        </p>
      </div>
      <p className="font-semibold text-gray-400 mt-4">
        {BlogData.blogContent}
      </p>
    </div>
  );
};

export default BlogCard;
