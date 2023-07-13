import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import AddCoffe from './Components/AddCoffe.jsx';
import UpdateCofee from './Components/UpdateCofee.jsx';
import Mentors from './Components/Public/Mentors/MentorsCard/Mentors.jsx';
import Members from './Members/Members.jsx';
import Main from './Components/Main.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Edit from './Components/Edit/Edit.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'members',
        element:<Members></Members>

      },
      {
        path:'about',
        element:<About></About>
      },
      {
        path:'dashboard',
        element:<Dashboard></Dashboard>
      }
      
    ]
    // loader: ()=> fetch('http://localhost:5000/cofee')
  },
 
  {
    path:"/admin",
    element:<Mentors></Mentors>,
    loader: ()=>fetch('http://localhost:5000/cofee')
  },
  {
    path:"addCofee",
    element:<AddCoffe></AddCoffe>
  },
  {
    path:"/updateCofee/:id",
    element:<Edit></Edit>,
    loader:({params})=> fetch(`http://localhost:5000/cofee/${params.id}`)
    
  },
  // {
  //   path:'members',
  //   element:<Members></Members>
  // }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
