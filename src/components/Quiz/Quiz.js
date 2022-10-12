import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const Quiz = () => {
    const quizs = useLoaderData().data
    const {name}=quizs
    console.log(quizs)
    return (
        <div>
           <p>{name}</p>
           {quizs.map((quiz,index)=>{
            console.log(index)
           })}


            {/* <p>this is quizzzz{quizs.questions.question}</p>   */}
        </div>
    );
};

export default Quiz;