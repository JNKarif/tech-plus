import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Main from './layouts/Main';
import Quiz from './components/Quiz/Quiz';
import Info from './components/Info/Info';
import Blog from './components/Blog/Blog';

function App() {
  const router = createBrowserRouter([
    {
path:'/', 
element:<Main></Main>,
children:[
  {
    path:'/',
  element:<Home></Home>
  },
  {
    path:'/quiz',
  element:<Quiz></Quiz>
  },
  {
    path:'/info',
  element:<Info></Info>
  },
  {
    path:'/blog',
  element:<Blog></Blog>
  },

]
    },
    {
      path:'*',
      element:<div>404 page not found !!! </div>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
