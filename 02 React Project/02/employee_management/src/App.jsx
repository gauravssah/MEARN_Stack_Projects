import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

function App() {

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);


  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.persone);
    }

  }, []);


  // This will maching the user login data.
  const handleLogin = (email, password) => {

    let findedAdmin;
    let findedEmployee;


    if (authData && authData.admin && authData.employees) {
      findedAdmin = authData.admin.find((e) => email == e.email && e.password == password);
      findedEmployee = authData.employees.find((e) => email == e.email && e.password == password);

    }


    if (authData && findedAdmin) {

      if (findedAdmin) {
        setUser('admin');
        setLoggedInUserData(findedAdmin);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', persone: findedAdmin }));

      }


    } else if (authData && findedEmployee) {

      if (findedEmployee) {
        setUser('employee');
        setLoggedInUserData(findedEmployee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', persone: findedEmployee }));

      }

    }
    else {
      alert("Invalid Credentials");
    }

  }



  return (
    <>

      {!user ? <Login handleLogin={handleLogin} /> : null}
      {user === 'admin' && loggedInUserData ? <AdminDashboard changeUser={setUser} loggedInUserData={loggedInUserData} /> : null}
      {user === 'employee' && loggedInUserData ? (
        <EmployeeDashboard changeUser={setUser} loggedInUserData={loggedInUserData} />
      ) : null}

      {/* ------------------------ */}

      {/* {!loggedin.role ? <Login handleLogin={handleLogin} /> : ""}
      {loggedin.role == 'admin' ? <AdminDashboard /> : ""}
      {loggedin.role == 'employee' ? <EmployeeDashboard /> : ""} */}

    </>
  )
}

export default App

