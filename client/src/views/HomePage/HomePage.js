import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import './HomePage.css';
import AuthorTable from '../../components/AuthorTable/AuthorTable';
import axios from 'axios';
import { Link } from 'react-router-dom';









const HomePage = () => {
  const [allAuthors, setAllAuthors] = useState([]);

 
  // get all authors
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors")
      .then((res) => setAllAuthors(res.data.authors))
      .catch((err) => console.log(err));
  }, [allAuthors]); // important!



  // delete One specific author
  const deleteAuthor = (authorId) => {
    axios
      .delete("http://localhost:8000/api/authors/" + authorId)
      .then((res) => {
        console.log(res.data.result);
        //setAllAuthors(allAuthors.filter(author=> author._id !== authorId)); // pas necessaire
      })
      .catch((err) => console.log(err));
  };


  
  return (
    <div className="HomePage">
      <Link to="/authors/new">Add an author</Link>
      <h4>we have quotes by : </h4>
      <AuthorTable allAuthors={allAuthors} deleteAuthor={deleteAuthor} />
    </div>
  );

};





HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
