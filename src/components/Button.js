import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const Button = ({ title }) => {
  const classes = style();
  return <button className={classes.button}>{title}</button>;
};

Button.propTypes = {
  title: PropTypes.string,
};

const style = makeStyles({
  button: {
    backgroundColor: 'purple',
    color: 'white',
    fontSize: '20px',
    padding: '10px 60px',
    borderRadius: 5,
    margin: '10px 0px',
    cursor: 'pointer',
  },
});

export default Button;
