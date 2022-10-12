import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizall from '../QuizAll/Quizall';

const QuizDetails = () => {
    const quizss = useLoaderData().data.questions
   
    // console.log(quizss.questions[index].question)
    // console.log(quizss.questions[0].correctAnswer);
    console.log(quizss)

    


    return (
        <div>

            <div className='bg-slate-400 '>
               
                <h2 className='text-4xl font-bold'>Please answer the following quiz and level up your skills !!!</h2>
                {
                    quizss.map(qz =><Quizall
                    key={qz.id}
                    qz={qz}
                    ></Quizall>)
                }

            </div>
        </div>
    );
};

export default QuizDetails;