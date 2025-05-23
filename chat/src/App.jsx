// Import App.css
import './App.css';
import LoginPage from 'auth/LoginPage'
import ChatPage from 'chat/ChatPage'
import Protected from 'components/auth/Protected'
import Home from 'pages/home/Home'
import Layout from 'components/Layout';
import Navigation from 'common/Navigation';
import { Routes, Route } from 'react-router-dom'

function App() {
  const routes=[
   {path:"/", element:<Home/>},
   {path:"/login",element:<LoginPage/>},
   {path:"/chat",element:<Protected><Layout><ChatPage/></Layout></Protected>},
  ]
  return (
    <>
    <Routes>
      
      {routes.map((route,index)=>(
        <Route key={index} path={route.path} element={route.element}/>
      ))}
    </Routes>
    </>
   
  )
}

export default App