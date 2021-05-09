import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const DetailCard = ({ post }) => {
  const { name, username, email, phone, website } = post;
  const { street, suite, city, zipcode } = post.address;
  const company = post.company.name;
  const classes = style();
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <div className={classes.info}>
          <h3>Name: {name}</h3>
          <p>UserName: {username}</p>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <p>Company: {company}</p>
          <a href={`https://${website}`} target='_blank' rel='noreferrer'>
            www.{website}
          </a>
          <h4> Address: </h4>
          <p>Street: {street}</p>
          <p>Suite: {suite}</p>
          <p>City: {city}</p>
          <p>Zipcode: {zipcode}</p>
        </div>
      </div>
    </div>
  );
};

DetailCard.propTypes = {
  post: PropTypes.object,
};

const style = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  card: {
    width: 400,
    background: 'lightblue',
    borderRadius: '10px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    textAlign: 'center',
  },
});
export default DetailCard;
