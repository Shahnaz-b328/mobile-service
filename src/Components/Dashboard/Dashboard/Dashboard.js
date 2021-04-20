import React, { useContext, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageService from '../ManageService/ManageService';
import AddService from '../AddService/AddService';
import OrderList from '../OrderList/OrderList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBorderAll, faList, faPlus, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import BookList from '../../User/BookList/BookList';
import Review from '../../User/Review/Review';
import { UserContext } from '../../../App';

const Dashboard = () => {
  const [logInUser, setLogInUser] = useContext(UserContext);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    fetch('https://polar-dawn-10437.herokuapp.com/isAdmin', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email: logInUser.email })
    })
      .then(res => res.json())
      .then(data => setAdmin(data));
  }, [])
  return (
    <Router>
      <div className="d-flex mt-5">
        <nav>
          <ul className="list-unstyled mx-5">
            <li>
              <Link to="/bookList"><FontAwesomeIcon icon={faList} />Book List</Link>
            </li>
            <li>
              <Link to="/review"><FontAwesomeIcon icon={faUser} />Review</Link>
            </li>
            {admin && <div>
              <li>
                <Link to="/orderList"><FontAwesomeIcon icon={faList} />Order List</Link>
              </li>
              <li>
                <Link to="/addService"><FontAwesomeIcon icon={faPlus} />Add Service</Link>
              </li>
              <li>
                <Link to="/makeAdmin"><FontAwesomeIcon icon={faUserPlus} />Make Admin</Link>
              </li>
              <li>
                <Link to="/manageService"><FontAwesomeIcon icon={faBorderAll} />Manage Service</Link>
              </li>
            </div>}
          </ul>
        </nav>
        <Switch>
          <Route path="/bookList">
            <BookList />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
          <Route path="/addService">
            <AddService />
          </Route>
          <Route path="/orderList">
            <OrderList />
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin />
          </Route>
          <Route path="/manageService">
            <ManageService />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Dashboard;