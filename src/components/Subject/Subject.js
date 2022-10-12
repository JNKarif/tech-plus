import React from 'react';
import { Link } from 'react-router-dom';
import './Subject.css'

const Subject = ({ subject }) => {
    const { logo, name, total, id } = subject;
    return (

        <div className='p-4 ' >

<div className=''>
<div className=" card card-compact w-auto p-4  shadow-xl   bg-indigo-400">
                <figure> <img src={logo} alt=""></img> </figure>
                <div className="card-body">
                    
                    <h2 className="card-title">{name}</h2>
                    <p>Total quiz: {total}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/quiz/${id}`}> <button className="btn btn-primary">Quiz</button></Link>

                    </div>
                </div>
            </div>

</div>




        </div>




    );
};

export default Subject;