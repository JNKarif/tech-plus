import React from 'react';
import { Link } from 'react-router-dom';
import './Subject.css'

const Subject = ({ subject }) => {
    const { logo, name, total,id } = subject;
    return (

       <div className='subject-container' > 
        <div >

       <div className='container-images'>
           <img src={logo} alt=""></img>
       </div>

       <div className='container-details'>
           <div className="subject-name">
               <p>{name}</p>
           </div>
           <div className="total">
               <p>Total quiz: {total}</p>
           </div>
           <div className="btn-quiz">
            <Link to={`/quiz/${id}`}> <button>Start Quiz</button></Link>
              
           </div>
       </div>

   </div>
   </div>
      



    );
};

export default Subject;