import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AuthorForm.css';
import { useNavigate } from 'react-router-dom'





const AuthorForm = (props) => {

    
  const { initialName, requestPostorPatch,  errors } = props;
  const [name, setName] = useState(initialName); 
  const navigate = useNavigate()
  

  const onSubmitHandler =  async(e) => {
      e.preventDefault();
      requestPostorPatch({ name });
      console.log("errors:::::::", errors);
  }
  

  return (
      <div className="AuthorForm">
        <form onSubmit={onSubmitHandler}>
           <div className='field'>
               <label>Name :</label><br/>
               <input type="text" value={name} onChange = {(e)=>setName(e.target.value)}/>
               { errors.name ? 
                      <p style={{color:"red"}}>{errors.name.message}</p>
                      : null
               }
           </div>
           <div className="validate_form">
             <input value="submit"  type="submit"/>
             <input value="cancel"  type="submit" onClick={e=>navigate("/authors")}/>
           </div>
        </form>
      </div>
   )
};

AuthorForm.propTypes = {};

AuthorForm.defaultProps = {};

export default AuthorForm;
