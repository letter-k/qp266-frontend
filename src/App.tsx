import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './components/Auth/Register/Register'
import Login from './components/Auth/Login/Login'
import Board from './components/Board/Board'
import Base from './components/Base/Base'
import Auth from './components/Auth/Auth'
import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<Base/>}>
            <Route index element={<Board/>}/>
          </Route>
          <Route path='/auth/' element={<Auth/>}>
            <Route path='register' element={<Register/>}/>
            <Route path='login'element={<Login/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
