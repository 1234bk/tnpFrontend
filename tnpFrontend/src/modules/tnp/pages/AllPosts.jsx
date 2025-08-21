import React, { useState, useEffect } from "react";
import axios from "axios";
import PostCard from "../components/Posts/PostCard";
import { motion } from "framer-motion";

const AllPosts = () => {

   useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top-left corner
  }, []);

  
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  // const [page, setPage] = useState(1);
  // const [hasMore, setHasMore] = useState(true);
  const [search, setSearch] = useState("");

  const fetchPosts = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/api/allposts`
      );

      // if (res.data.length < 5) setHasMore(false);

      setPosts(res.data);
      setFilteredPosts(res.data);
    } catch (err) {
      console.error("Error fetching posts:", err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Filter posts when search changes
  useEffect(() => {
    
      const lower = search.toLowerCase();
      setFilteredPosts(
        posts.filter((p) =>
          p.companyName.toLowerCase().startsWith(lower)
        )
      );
    
  }, [search, posts]);

  return (
    <div className="min-h-screen mt-30 md:mb-10 bg-white py-10 px-4">
      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="🔍 Search by company name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-xl border-2 border-[#9B1C1C] rounded-full px-5 py-2 outline-none focus:ring-2 focus:ring-[#9B1C1C] transition shadow-sm"
        />
      </div>

      {/* Posts Grid */}

      <div className=" mt-20 grid  grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl m-auto">
        {filteredPosts.map((post, index) => (
          <motion.div
            key={post._id || index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeIn" }}
          >
             < PostCard post={post} />
          </motion.div>
        ))}
      </div>

      {/* Load More
      {hasMore && !search && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setPage((prev) => prev + 1)}
            className="bg-[#9B1C1C] text-white px-6 py-2 rounded-full shadow-md hover:opacity-90 transition"
          >
            Load More
          </button>
        </div>
      )} */}

    </div>
  );
};

export default AllPosts;
