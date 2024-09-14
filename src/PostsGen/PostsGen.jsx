import React, { useState, useRef, useEffect } from "react";
import "./PostsGen.css";

function PostsGen() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    topic: "",
    status: "",
    audience: "Public",
  });
  const [editIndex, setEditIndex] = useState(null);
  const [postToEdit, setPostToEdit] = useState({});
  const inputRef = useRef(null);
  const editInputRef = useRef(null);

  // Load posts from localStorage on component mount:
  useEffect(() => {
    const savedPosts = localStorage.getItem("posts");
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  // Save posts to localStorage whenever they change:
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const handleAddChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setPostToEdit((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAddPost = (e) => {
    e.preventDefault();
    if (newPost.topic.trim() !== "") {
      setPosts([...posts, newPost]);
      setNewPost({ topic: "", status: "", audience: "Public" });
      inputRef.current.focus();
    } else {
      inputRef.current.focus();
    }
  };

  const handleDelete = (index) => {
    const remainingPosts = posts.filter((post, i) => i !== index);
    setPosts(remainingPosts);
    setEditIndex(null);
  };

  const handleDeleteAll = () => {
    setPosts([]);
    setEditIndex(null);
    localStorage.removeItem("posts");
    localStorage.clear();
  };
  

  const handleEdit = (index) => {
    setEditIndex(index);
    setPostToEdit(posts[index]);
  };

  const handleUpdate = (index) => {
    if (postToEdit.topic.trim() !== "") {
      const updatedPosts = posts.map((post, i) =>
        i === index ? postToEdit : post
      );
      setPosts(updatedPosts);
      setEditIndex(null);
    } else {
      editInputRef.current.focus();
    }
  };

  useEffect(() => {
    if (editIndex !== null && editInputRef.current) {
      editInputRef.current.focus();
    }
  }, [editIndex]);

  return (
    <div className="post-app">
      <h1>Post Generator</h1>
      <form className="input-section" onSubmit={handleAddPost}>
        <input
          type="text"
          name="topic"
          value={newPost.topic}
          placeholder="Add Post Topic"
          onChange={handleAddChange}
          ref={inputRef}
          className="add-input"
        />
        <textarea
          name="status"
          value={newPost.status}
          placeholder="What's on your mind?"
          onChange={handleAddChange}
          className="add-textArea"
        />
        <div className="bottom-add">
          <select name="audience" value={newPost.audience} onChange={handleAddChange} className="select-add">
            <option value="Public">Public</option>
            <option value="Friends">Friends</option>
            <option value="Private">Private</option>
          </select>
          <button type="submit" className="add-post">
            POST
          </button>
          <button type="reset" onClick={handleDeleteAll} className="clear">
            Delete All
          </button>
        </div>
      </form>
      <ul className="post-list">
        {posts.map((post, index) => (
          <li key={index} className="post-item">
            {editIndex === index ? (
              <div>
                <input
                  type="text"
                  name="topic"
                  value={postToEdit.topic}
                  placeholder="Edit post topic"
                  onChange={handleEditChange}
                  ref={editInputRef}
                  className="edit-input"
                />
                <textarea
                  name="status"
                  value={postToEdit.status}
                  placeholder="What's on your mind?"
                  onChange={handleEditChange}
                  className="edit-input txt-edit"
                />
                <div className="bottom-edit">
                  <select
                    name="audience"
                    value={postToEdit.audience}
                    onChange={handleEditChange}
                    className="edit-select"
                  >
                    <option value="Public">Public</option>
                    <option value="Friends">Friends</option>
                    <option value="Private">Private</option>
                  </select>
                  <button type="button" onClick={() => handleUpdate(index)} className="save-post">
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditIndex(null)}
                    className="cancel-edit"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h2>{post.topic}</h2>
                <p>{post.status}</p>
                <h5>Audience: {post.audience}</h5>
                <button
                  type="button"
                  onClick={() => handleEdit(index)}
                  className="edit-post"
                >
                  Edit
                </button>
                <div
                  onClick={() => handleDelete(index)}
                  className="delete-post"
                >
                  x
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsGen;