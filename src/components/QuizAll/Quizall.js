import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quizall = ({ qz }) => {
    console.log(qz)
    const { question, options, name, questions } = qz


    const showToastMessage = () => {
        toast.success('Success Notification !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    const handleAnswer = (event) => {
        const answer = event.target.innerText;
        // console.log(answer)

        // if(answer === quizss.questions[0].correctAnswer.innerText){
        //     alert('you are correct')
        // }
    }
    return (
        <div>
            <div className='flex items-center text-center'>



                <div className="card w-full  bg-neutral text-neutral-content m-10 items-center text-center ">
                    <div className="card-body  items-center text-center">
                        <h2 className="card-title">{question}</h2>
                        <p> <p> <button onClick={(event) =>
                            handleAnswer(event)}><span>a.</span>  {options[0]}
                        </button> </p>
                            <p> <button onClick={(event) =>
                                handleAnswer(event)}><span>b.</span>  {options[1]}
                            </button> </p>
                            <p> <button onClick={(event) =>
                                handleAnswer(event)}><span>c.</span>  {options[2]}
                            </button> </p>
                            <p> <button onClick={(event) =>
                                handleAnswer(event)}><span>d.</span>  {options[3]}
                            </button> </p></p>
                        <div className="card-actions justify-end">

                        <div>
            <button onClick={showToastMessage} className="btn btn-primary">Correct Answer</button>
            <ToastContainer />
        </div>

                            <button ></button>
                            
                        </div>
                    </div>
                </div>





            </div>
            {
                alert
            }
        </div>
    );
};

export default Quizall;