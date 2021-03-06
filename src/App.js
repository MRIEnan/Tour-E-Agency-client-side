import './App.css';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
import HomeContainer from './Pages/HomePage/HomeContainer/HomeContainer';
import LoginContainer from './Pages/LoginPage/LoginContainer/LoginContainer';
import MyOrdersContainer from './Pages/MyOrdersPage/MyOrdersContainer/MyOrdersContainer';
import ManageAllOrdersContainer from './Pages/ManageAllOrdersPage/ManageAllOrdersContainer/ManageAllOrdersContainer/ManageAllOrdersContainer';
import AddSpotContainer from './Pages/AddSpotPage/AppSpotContainer/AddSpotContainer'
import Navbar from './Pages/Shared/Navbar/Navbar';
import PrivateRoute from './Pages/Shared/PrivateRoute/PrivateRoute';
import SpotBooking from './Pages/SpotDetails/SpotBooking';
import Footer from './Pages/Shared/Footer/Footer';
import AllPackages from './Pages/AllPackages/AllPackages';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div>
      <AuthProvider>
          <Router>
            <Navbar/>
              <Switch>
                  <Route exact path='/'>
                      <HomeContainer></HomeContainer>
                  </Route>
                  <Route path='/home'>
                      <HomeContainer></HomeContainer>
                  </Route>
                  <Route path='/login'>
                      <LoginContainer></LoginContainer>
                  </Route>
                  <Route path='/allPackages'>
                      <AllPackages></AllPackages>
                  </Route>
                  <PrivateRoute path='/myOrders'>
                      <MyOrdersContainer></MyOrdersContainer>
                  </PrivateRoute>
                  <PrivateRoute path='/spots/:id'>
                      <SpotBooking></SpotBooking>
                  </PrivateRoute>
                  <PrivateRoute path='/manageAllOrders'>
                      <ManageAllOrdersContainer></ManageAllOrdersContainer>
                  </PrivateRoute>
                  <Route path='/addSpot'>
                      <AddSpotContainer></AddSpotContainer>
                  </Route>
                  <Route path='*'>
                      <NotFound></NotFound>
                  </Route>
              </Switch>
              <Footer></Footer>
          </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
