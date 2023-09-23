import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Chat from './components/Chat';
import Schedule from './components/Schedule';
import Progress from './components/Progress';
import Login from './components/Login';
import Register from './components/Register';
import NotFound from './pages/NotFound';
import './css/main.css'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element = {<Roote/>}>
        <Route index element = {<Chat/>}/>
        <Route path='/schedule' element = {<Schedule/>}/>
        <Route path='/progress' element = {<Progress/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/register' element = {<Register/>}/>
        <Route path='*' element = {<NotFound/>}/>
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

const Roote = () => {
  return (
    <div className='container'>
      <Navbar/>
      <Outlet/>
    </div>
  );
}

export default App;
