import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Subject from '../Subject/Subject';
import './Home.css'

const Home = () => {
    const subjects = useLoaderData().data;
    // console.log(subjects)
    return (
        <div>
            <div className='banner-container'>


                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://images.unsplash.com/photo-1539628399213-d6aa89c93074?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">It matters,
                            how you ask</h2>
                        <p>Assessment, instruction, and practice that motivate every student to mastery</p>

                    </div>
                </div>


             


            </div>
            {
                subjects.map(subject => <Subject
                    key={subject.id}
                    subject={subject}
                ></Subject>)
            }
        </div>
    );
};

export default Home;