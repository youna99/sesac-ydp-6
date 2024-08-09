import React, { useEffect, useState } from "react";
import "./postlist.css";
import axios from "axios";

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
      <h2>Post List</h2>
      {posts.length === 0 ? (
        <div>loading</div>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <span>No.{post.id}</span> - <span>{post.title}</span>
              <div>{post.body}</div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default PostList;
