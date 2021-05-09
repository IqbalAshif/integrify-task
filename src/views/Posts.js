import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import { makeStyles } from '@material-ui/core/styles';
import { apiUrl } from '../utils/Variables';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const classes = style();

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(apiUrl);
      const json = await response.json();
      //console.log(json);
      setPosts(json);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  useEffect(() => {
    fetchUsers();
    setIsLoading(false);
  }, []);

  return (
    <div className={classes.post}>
      {isLoading ? (
        <h1>Loading......</h1>
      ) : (
        <>
          {posts.map((post) => (
            <Card key={post.id} post={post} />
          ))}
        </>
      )}
    </div>
  );
};

const style = makeStyles({
  post: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'space-around',
  },
});

export default Posts;
