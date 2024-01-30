import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './CreatePage.css';
import AuthorForm from '../../components/AuthorForm/AuthorForm';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';




const CreatePage = () => {

 
  const [errors, setErrors] = useState({}); 
  const navigate = useNavigate();


  // create one author
  const createAuthor = (authObj) => {
    axios
      .post(
        "http://localhost:8000/api/authors", authObj 
      )
      .then((res) => {
        console.log(res.data.author);
        setErrors({});
        navigate("/authors");
       // setAllAuthors([...allAuthors, res.data.author]); // pas necessaire
      })
      .catch(err=>{
        console.log("err//////", err)
        const errorResponse = err.response.data.errors; 
        // Set Errors
        setErrors(errorResponse);
      }) 
  };

  return (
    <div className="CreatePage">
       <Link to="/">
          Home 
        </Link>
      <h4>Add a new author : </h4>
      <AuthorForm
        requestPostorPatch={createAuthor}
        initialName=""
        errors={errors}
      />
    </div>
  );

};











CreatePage.propTypes = {};

CreatePage.defaultProps = {};

export default CreatePage;
