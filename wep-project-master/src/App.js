import "./App.css";
import Profile from "./Componants/Profile/Profile";
import Login from "./Componants/Login/Login";
import Register from "./Componants/Register/Register";
import { BrowserRouter as Route } from "react-router-dom";
import { useState } from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Componants/Layout/Layout';
import Home from './Componants/Home/Home';

let routers = createBrowserRouter ([
  {path:'/' , element:<Layout /> , children:[
  { path: '', element: <Home /> },
]}
])
function App() {
  const [userstate, setUserState] = useState({});
  return (
    <>
   <RouterProvider router={routers}/>
   <Route
            path="/"
            element={
              userstate && userstate._id ? (
                <Profile
                  setUserState={setUserState}
                  username={userstate.fname}
                />
              ) : (
                <Login setUserState={setUserState} />
              )
            }
          ></Route>
          <Route
            path="/login"
            element={<Login setUserState={setUserState} />}
          ></Route>
          <Route path="/signup" element={<Register />}></Route>
    </>
  )
}
export default App;
