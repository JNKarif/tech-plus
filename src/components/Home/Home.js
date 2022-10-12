import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Subject from '../Subject/Subject';

const Home = () => {
    const subjects=useLoaderData().data;
    console.log(subjects)
    return (
        <div>
      {
      subjects.map(subject=><Subject
      key={subject.id}
      subject={subject}
      ></Subject>)
      } 
        </div>
    );
};

export default Home;