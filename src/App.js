import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import Booking from './Components/User/Booking/Booking';
import { createContext } from 'react';
import { useState } from 'react';
import Navbar from './Components/Shared/Navbar/Navbar';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';

export const UserContext = createContext();
function App() {
  const [logInUser, setLogInUser] = useState({});
  return (
    <UserContext.Provider value={[logInUser, setLogInUser]}>
    <Router>
      <Navbar></Navbar>
       <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute path="/services/:name">
        <Booking></Booking>
        </PrivateRoute>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
  </Router>
  </UserContext.Provider>
  );
}

export default App;
