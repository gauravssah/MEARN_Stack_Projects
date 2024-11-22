import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage.jsx'
import { AuthContext } from './context/AuthProvider.jsx'

function App() {

  const [user, setUser] = useState(null);

  // This will maching the user login data.
  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin');
    } else if (email == 'user@me.com' && password == '123') {
      setUser('employee');
    }
    else {
      alert("Invalid Credentials");
    }
  }

  const data = useContext(AuthContext);
  console.log("Data is  : ", data);

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == 'admin' ? <AdminDashboard /> : ""}
      {user == 'employee' ? <EmployeeDashboard /> : ""}
    </>
  )
}

export default App

