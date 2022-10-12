import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const Quiz = () => {
    const quizs = useLoaderData().data
    console.log(quizs)
    return (
        <div>
           <p>hello quiz</p>
           {quizs.map(quiz=><QuizDetails
           key={quiz.id}
           quiz={quiz}
           ></QuizDetails>)}


            {/* <p>this is quizzzz{quizs.questions.question}</p>   */}
        </div>
    );
};

export default Quiz;