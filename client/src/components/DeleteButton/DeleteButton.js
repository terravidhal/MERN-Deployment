import React from 'react';
import PropTypes from 'prop-types';
import './DeleteButton.css';
import axios from 'axios';







const DeleteButton = (props) => {
  const { authorId, successCallback } = props;


  const deleteProductfunc = (e) => {
      axios.delete('http://localhost:8000/api/authors/' + authorId)
          .then(res=>{
              successCallback(); // => console.log(res.data.result);
          })
         .catch((err)=>console.log(err))
  }


  return (
      <button className='btn btn-primary DeleteButton' onClick={deleteProductfunc}>
          Delete
      </button>
  );
}



DeleteButton.propTypes = {};

DeleteButton.defaultProps = {};

export default DeleteButton;
