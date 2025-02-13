import { useState } from 'react'
import React, { Fragment } from 'react';
import '../styles/App.css'
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router=createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>  /*<div>Root Element</div> replace by main component*/
  },
  {
    path: '/quiz',
    element: <Quiz></Quiz>
  },
  {
    path: '/result',
    element: <Result></Result>
  }
])
function App() {
  return(
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App