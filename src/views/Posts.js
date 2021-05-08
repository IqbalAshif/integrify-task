import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';

const Posts = () => {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  const [posts, setPosts] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(apiUrl);
      const json = await response.json();
      console.log(json);
      setPosts(json);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      {posts.map((post) => (
        <>
          <Card
            key={post.id}
            name={post.name}
            username={post.username}
            website={post.website}
          />

          <Link to={`/users/${post.id}`} person={post}>
            <Button text='View details' />
          </Link>
        </>
      ))}
    </div>
  );
};

export default Posts;
