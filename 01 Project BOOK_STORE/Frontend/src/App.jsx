import React from 'react'
import Home from './home/Home'
import Course from './components/Course'
import Contact from './components/Contact'
import About from './components/About'
import { Routes, Route, Navigate } from 'react-router-dom'
import NotFound from './components/NotFound'
import Signup from './components/Signup'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'


function App() {

  // This will give the login user 
  const [authUser, setAuthUser] = useAuth();
  // console.log(authUser);


  return (
    <>

      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/course' element={authUser ? <Course /> : <Navigate to="/signup" />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/signup' element={<Signup />} />

          {/* This will Render - 404 Not Found! */}
          <Route path='*' element={<NotFound />} />

        </Routes>

        <Toaster />

      </div>

    </>
  )
}

export default App
