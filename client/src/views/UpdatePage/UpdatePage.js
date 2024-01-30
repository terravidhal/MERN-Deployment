import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import './UpdatePage.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import AuthorForm from '../../components/AuthorForm/AuthorForm';





const UpdatePage = (props) => {

  const { id } = useParams();
  const [authObj, setAuthObj] = useState({});
  const [loaded, setLoaded] = useState(false); // check if the data is available
  const navigate = useNavigate();
  const [errors, setErrors] = useState({}); 


  //get  data one specific author
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors/" + id)
      .then((res) => {
        setAuthObj(res.data.author);
        setLoaded(true); // data available => set "true"
      })
      .catch((err) => console.log(err));
      
    }, [id]); // updating "AuthObj" based on "id"



  // update one specific author
  const updateAuthor = (authObj) => {
    axios
      .patch(
        "http://localhost:8000/api/authors/" + id,

        authObj 
      )
      .then((res) => {
       // console.log(res.data.author);
        setErrors({});
        navigate("/authors");
      })
      .catch(err=>{
        console.log("err//////", err)
        const errorResponse = err.response.data.errors; 
        // Set Errors
        setErrors(errorResponse);
      }) 
  };



  return (
    <div className="UpdatePage">
      <Link to="/">
         Home 
      </Link>
      <h4>Edit this author</h4>
      {loaded === true ? 
        <AuthorForm requestPostorPatch={updateAuthor} 
        initialName={authObj.name}
        errors={errors} />
       : null}
    </div>
  );

};





UpdatePage.propTypes = {};

UpdatePage.defaultProps = {};

export default UpdatePage;
