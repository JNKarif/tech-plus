import React from 'react';

const Blog = () => {
    return (
        <div className=' bg-slate-200 grid md:grid-cols-3 gap-1 p-4'>

<div className="card w-auto bg-neutral text-neutral-content ml-5 mb-10 mt-10">
  <div className="card-body items-center text-center">
    <h2 className="card-title">What is the purpose of react router?</h2>
    <p>The main purpose of react router library is navigation of
                components  and url.
                User can find and understand his current location in the website
                and easily route through the browser url. Link is a very
                strong tool to Navigate through any button or anchor types link.
                We can create router by createBrowserRouter, RouterProvider, useLoaderData,
                loader and Router etc.</p>
    
  </div>
</div>


<div className="card w-auto bg-neutral text-neutral-content mb-10 mt-10">
  <div className="card-body items-center text-center">
    <h2 className="card-title">How does context API works?</h2>
    <p> React allows Context API to share state everywhere in the app
                which is a modern concept just makes the
                works easier and efficient. It directly
                replaced the monotonous "prop drilling". It can pass global
                variables to child from grand father even grand-children or pranent to child.</p>
   
  </div>
</div>


<div className="card w-auto bg-neutral text-neutral-content  mb-10 mt-10">
  <div className="card-body items-center text-center">
    <h2 className="card-title">What is useref?</h2>
    <p>useref hook certainly creates 
                reference to the dom element.
                It is very helpful in the case of text-selection,
                trigger imperative animations, third-party libaries integration
                 or manage focus.</p>
   
  </div>
</div>




        
        </div>
    );
};

export default Blog;