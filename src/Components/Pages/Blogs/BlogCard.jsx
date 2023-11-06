/* eslint-disable react/prop-types */


const BlogCard = ({blog}) => {
     return (
          <div className="bg-white rounded-md border  p-4">
          <h2 className="text-2xl font-semibold text-gray-800">{blog.title}</h2>
          <p className="text-gray-600 text-sm mt-2">
            Published on {blog.date} by {blog.author}
          </p>
          <p className="text-gray-700 mt-4">{blog.content.substring(0, 150)}...</p>
          <a href='' className="text-blue-500 hover:underline mt-4 block">
            Read More
          </a>
        </div>
     );
};

export default BlogCard;