import '../App.css';
import Link from '@material-ui/core/Link';

const Card = (props) => {
  return (
    <div className='card'>
      <h1>{props.name.charAt(0)}</h1>
      <h3>{props.name}</h3>
      <p>{props.username}</p>
      <Link>{props.website}</Link>
    </div>
  );
};

export default Card;
