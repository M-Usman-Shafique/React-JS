import React, { useState, useEffect } from "react";
import axios from "axios";

function Pagination() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  let pages = [];

  const totalPages = Math.round(posts.length / postsPerPage);
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  // Separating posts to display on the current page:
  const lastPostIndex = currentPage * postsPerPage;   // lastPostIndex of current page.
  const firstPostIndex = lastPostIndex - postsPerPage;  // firstPostIndex of current page.
  const currentPosts = posts.slice(firstPostIndex, lastPostIndex);  // posts to show on the current page.

  const handleNext = () => {
    if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1)
    }
  }

  const handlePrev = () => {
    if (currentPage > 1) {
        setCurrentPage(currentPage - 1)
    }
  }

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
      setError(null);
    } catch (error) {
      setError(error.message);
      setPosts(null);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {error && <h1>{error}</h1>}
      <ul>
        {currentPosts &&
          currentPosts.map((post) => (
            <li key={post.id}>
              <h2>{post.title.slice(0, 15)}</h2>
              <p>{post.body.slice(0, 100)}</p>
            </li>
          ))}
      </ul>
      <div>
        <button onClick={handlePrev} disabled={currentPage === 1}>Prev</button>
        {pages.map((page, i) => {
          return <button key={i} onClick={() => setCurrentPage(page)}>{page}</button>
        })}
        <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
}

export default Pagination;
