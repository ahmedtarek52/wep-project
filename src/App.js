
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Componants/Layout/Layout';
import Home from './Componants/Home/Home';
import Login from './Componants/Login/Login';

let routers = createBrowserRouter ([
  {path:'/' , element:<Layout /> , children:[
  { path: '', element: <Home /> },
  { path: 'login', element: <Login /> },
  
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
