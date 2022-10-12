import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizDetails = () => {
    const quizss = useLoaderData().data
    console.log(quizss.questions[0].question)


    const { question, options, name, questions } = quizss
    return (
        <div>
            <h2>Quiz about: {name}</h2>
            <div>
                <p>Questions: {questions[0].question}</p>

                <div className='options-container'>
                    <p>a. {questions[0].options[0]}</p>
                    <p>b. {questions[0].options[1]}</p>
                    <p>c. {questions[0].options[2]}</p>
                    <p>d. {questions[0].options[3]}</p>
                </div>

            </div>
        </div>
    );
};

export default QuizDetails;