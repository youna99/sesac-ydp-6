import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles/SassPrac3.scss";

function PostList() {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setPosts(fakePosts);
  //   }, 2000);
  // }, []);

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    setTimeout(() => {
      getPost();
    }, 2000);
  }, []);

  return (
    <>
      <h2 className="header">Post List</h2>
      {posts.length === 0 ? (
        <div>loading</div>
      ) : (
        <ul className="postlist">
          {posts.map((post) => (
            <li className="list" key={post.id}>
              <span className="postId">No.{post.id}</span> -{" "}
              <span className="postTitle">{post.title}</span>
              <div className="postBody">{post.body}</div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default PostList;
