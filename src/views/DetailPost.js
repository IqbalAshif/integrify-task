import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailCard from '../components/DetailCard';

const DetailPost = () => {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  const [post, setPost] = useState({
    address: {},
    company: {},
  });
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetchUserById = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(apiUrl + `/${id}`);
        const json = await response.json();
        console.log(json);
        setPost(json);
      } catch (error) {
        throw new Error(error.message);
      }
    };
    fetchUserById();
    setIsLoading(false);
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <h1>Loading......</h1>
      ) : (
        <>
          <DetailCard key={post.id} post={post} />
        </>
      )}
    </div>
  );
};

export default DetailPost;
