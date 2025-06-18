import React, { useEffect, useState } from "react";
import axios from "axios";

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get("https://ai-solutions-server.vercel.app/blogs");
                setBlogs(response.data);
            } catch (error) {
                console.error("Error fetching blog data:", error);
            }
        };

        fetchBlogs();
    }, []);

    const visibleBlogs = showAll ? blogs : blogs.slice(0, 3);

    return (
        <section className="max-w-[1800px] mx-auto px-4 py-16">
            <div className="text-center mb-12 pt-10">
                <span className="text-xs uppercase bg-gray-200 text-black px-3 py-1 rounded-full shadow-sm">Blog</span>
                <h2 className="mt-4 text-3xl md:text-[64px] font-semibold text-gray-800 leading-snug">
                    Discover the latest blogs
                </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {visibleBlogs.map((blog) => (
                    <div key={blog.id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full">
                        <img src={blog.image} alt={blog.title} className="w-full h-56 object-cover" />
                        <div className="p-5 flex flex-col flex-grow">
                            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                            <p className="text-gray-600 text-sm mb-3 flex-grow">{blog.description}</p>
                            <span className="text-xs px-3 py-1 bg-purple-100 text-purple-700 rounded-full self-start">
                                #{blog.tag}
                            </span>
                            <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                                <p className="flex items-center gap-2">
                                    <img
                                        src="https://i.pravatar.cc/24"
                                        alt={blog.author}
                                        className="w-6 h-6 rounded-full"
                                    />
                                    {blog.author}
                                </p>
                                <p>
                                    {blog.date} • {blog.readTime}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-10 text-center">
                {!showAll ? (
                    <button
                        onClick={() => setShowAll(true)}
                        className="bg-gradient-to-r from-[rgba(241,165,145,1)] to-[rgba(233,119,217,1)] text-white px-8 py-3 rounded-full transition"
                    >
                        Read More
                    </button>
                ) : (
                    <button
                        onClick={() => setShowAll(false)}
                        className="bg-gradient-to-r from-[rgba(241,165,145,1)] to-[rgba(233,119,217,1)] text-white px-8 py-3 rounded-full transition"
                    >
                        Read Less
                    </button>
                )}
            </div>
        </section>
    );
};

export default Blog;
