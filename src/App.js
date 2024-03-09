
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Componants/Layout/Layout';
import Home from './Componants/Home/Home';
import About from './Componants/About/About';
import Brands from './Componants/Brands/Brands';
import BrandDetails from './Componants/BrandDetails/BrandDetails';
import Organization from './Componants/Organization/Organization';
import OrganizationDetails from './Componants/OrganizationDetails/OrganizationDetails';
import Login from './Componants/Login/Login';
import Register from './Componants/Register/Register';
import Profile from './Componants/Profile/Profile';
import Contact from './Componants/Contact/Contact';
import Donation from './Componants/Donation/Donation';
import DonationForm from './Componants/Donation/DonationForm';


let routers = createBrowserRouter ([
  {path:'/' , element:<Layout /> , children:[
  { path: '', element: <Home /> },
  { path: 'login', element: <Login/> },
  { path: 'register', element: <Register/> },
  { path: 'about', element: <About /> },
  { path: 'contact', element: <Contact/> },
  { path: 'profile', element: <Profile/> },
  { path: 'donation', element: <Donation/> },
  { path: 'donationform', element: <DonationForm/> },
  { path: 'brands', element: <Brands/> },
  { path: 'branddetails/:id', element: <BrandDetails/> },
  { path: 'organization', element: <Organization/>},
  { path: 'organizationdetails/:id', element: <OrganizationDetails/>},  
]}
])

function App() {
  
   

  return (
    <>
   <RouterProvider router={routers}/>
    </>
  )


}

export default App;
