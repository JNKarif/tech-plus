import React from 'react';

const Blog = () => {
    return (
        <div>
            <h3 className="text-3xl font-bold underline"> What is the purpose of react router?</h3>
            <p>The main purpose of react router library is navigation of
                components  and url.
                User can find and understand his current location in the website
                and easily route through the browser url. Link is a very
                strong tool to Navigate through any button or anchor types link.
                We can create router by createBrowserRouter, RouterProvider, useLoaderData,
                loader and Router etc.
            </p>
            <br></br>
            <br></br>
            <h3>How does context API works?</h3>
            <p>

                React allows Context API to share state everywhere in the app
                which is a modern concept just makes the
                works easier and efficient. It directly
                replaced the monotonous "prop drilling". It can pass global
                variables to child from grand father even grand-children or pranent to child.

            </p>
            <br></br>
            <br></br>
            <h3>What is useref?</h3>
            <p>useref hook certainly creates 
                reference to the dom element.
                It is very helpful in the case of text-selection,
                trigger imperative animations, third-party libaries integration
                 or manage focus
        </p>
        </div>
    );
};

export default Blog;