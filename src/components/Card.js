import { Link } from 'react-router-dom';
import Button from './Button';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const Card = ({ post }) => {
  const { id, name, username, website } = post;
  const classes = style();

  return (
    <div className={classes.card}>
      <div className={classes.upper}>
        <Avatar className={classes.avatar}>{name.charAt(0)}</Avatar>
      </div>
      <div className={classes.info}>
        <h3>{name}</h3>
        <h4>{username}</h4>
        <a href={`https://${website}`} target='_blank' rel='noreferrer'>
          www.{website}
        </a>
      </div>
      <Link to={`/users/${id}`} post={post}>
        <Button title='View details' />
      </Link>
    </div>
  );
};

Card.propTypes = {
  post: PropTypes.object,
};

const style = makeStyles({
  card: {
    height: '300px',
    width: '250px',
    background: 'lightblue',
    borderRadius: '10px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    textAlign: 'center',
    marginTop: '20px',
  },

  upper: {
    marginTop: '5px',
  },

  avatar: {
    positon: 'absolute',
    top: 0,
    left: 100,
    backgroundColor: 'green',
  },

  info: {
    marginBottom: '50px',
  },
});
export default Card;
