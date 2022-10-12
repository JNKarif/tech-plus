import React from 'react';

const Quizall = ({qz}) => {
    console.log(qz)
    const {question, options, name, questions}=qz


    const handleAnswer = (event) => {
        const answer = event.target.innerText;
        // console.log(answer)

        // if(answer === quizss.questions[0].correctAnswer.innerText){
        //     alert('you are correct')
        // }
    }
    return (
        <div>
             <div className='options-container'>

             
             <h3>{question}</h3>
                <p> <button onClick={(event) => 
                    handleAnswer(event)}><span>a.</span>  { options[0]}
                     </button> </p>
                <p> <button onClick={(event) => 
                    handleAnswer(event)}><span>b.</span>  { options[1]}
                     </button> </p>
                <p> <button onClick={(event) => 
                    handleAnswer(event)}><span>c.</span>  { options[2]}
                     </button> </p>
                <p> <button onClick={(event) => 
                    handleAnswer(event)}><span>d.</span>  { options[3]}
                     </button> </p>
               
            </div>
            {
                alert
            }
        </div>
    );
};

export default Quizall;