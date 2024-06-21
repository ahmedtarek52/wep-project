
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Componants/Layout/Layout';
import Home from './Componants/Home/Home';
import About from './Componants/About/About';
// import Brands from './Componants/Brands/Brands';
import BrandDetails from './Componants/BrandDetails/BrandDetails';
// import Organization from './Componants/Organization/Organization';
import OrganizationDetails from './Componants/OrganizationDetails/OrganizationDetails';
import Login from './Componants/Login/Login';
import Register from './Componants/Register/Register';
import Profile from './Componants/Profile/Profile';
import Contact from './Componants/Contact/Contact';
import Donation from './Componants/Donation/Donation';
import DonationForm from './Componants/Donation/DonationForm';
import PrivateRoute from './Componants/PrivateRoute/PrivateRoute';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import DataContextProvide from './Context/Store';
import Payment from './Componants/Payment/Payment';



function App() {
useEffect(()=>{
if(localStorage.getItem('token')!==null){
  saveUserData();
}
}, [])


  const [userData , setuserData] = useState(null);
function saveUserData(){
  let encodedToken = localStorage.getItem("token");
  let decodedToken = jwtDecode(encodedToken);
  setuserData(decodedToken);
  // console.log(decodedToken);

}


  let routers = createBrowserRouter ([
    { path: '/', element: <Layout userData={userData} setuserData={setuserData} />, children: [
      { path: '', element: <Home /> },
      { path: 'login', element: <Login saveUserData={saveUserData} /> },
      { path: 'register', element: <Register /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <PrivateRoute userData={userData}><Contact /></PrivateRoute> },
      { path: 'profile', element: <PrivateRoute userData={userData}><Profile /></PrivateRoute> },
      { path: 'donation', element: <Donation /> },
      { path: 'donationform', element: <PrivateRoute userData={userData}><DonationForm /></PrivateRoute>},
      // { path: 'brands', element: <Brands /> },
      { path: 'branddetails/:id', element: <BrandDetails /> },
      // { path: 'organization', element: <Organization /> },
      { path: 'organizationdetails/:id', element: <OrganizationDetails /> },
      { path: 'privateroute', element: <PrivateRoute /> },
      { path: 'payment', element: <Payment/> },
  ]}
  
  ])

  return (
  <DataContextProvide>
    <RouterProvider router={routers}/>
  </DataContextProvide>

   

  )


}

export default App;
