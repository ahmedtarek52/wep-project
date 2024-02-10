
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Componants/Layout/Layout';
import Home from './Componants/Home/Home';
// import Login from './Componants/Login/Login';
import About from './Componants/About/About';
import Brands from './Componants/Brands/Brands';
import Organization from './Componants/Organization/Organization';
import OrganizationDetails from './Componants/OrganizationDetails/OrganizationDetails';

let routers = createBrowserRouter ([
  {path:'/' , element:<Layout /> , children:[
  { path: '', element: <Home /> },
  { path: 'about', element: <About /> },
  { path: 'brands', element: <Brands/> },
  { path: 'organization', element: <Organization/>},
  { path: 'organizationDetails/:id', element: <OrganizationDetails/>},
  // { path: 'login', element: <Login /> },
  
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
