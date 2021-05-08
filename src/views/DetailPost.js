import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DetailPost = () => {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  const [posts, setPosts] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchUserById = async () => {
      try {
        const response = await fetch(apiUrl + `/${id}`);
        const json = await response.json();
        console.log(json);
        setPosts(json);
      } catch (error) {
        throw new Error(error.message);
      }
    };
    fetchUserById();
  }, [id]);

  return (
    <div>
      <h2>{posts.name}</h2>
    </div>
  );
};

export default DetailPost;
