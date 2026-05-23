import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import CreateCV from '../pages/CreateCV/CreateCV'
import ReviewCV from '../pages/ReviewCV/ReviewCV'
import Dashboard from '../pages/Dashboard/Dashboard'
import MyCvs from '../pages/MyCvs/MyCvs'
import PublicLayout from '../components/layout/PublicLayout'
import PrivateLayout from '../components/layout/PrivateLayout'

// BrowserRouter --> Interpreta as URLS do navegador;
// Router --> Agrupa as rotas;
// Router --> São as rotas individuais

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Route>
        <Route element={<PrivateLayout />}>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/create-cv" element={<CreateCV />}></Route>
          <Route path="/review-cv" element={<ReviewCV />}></Route>
          <Route path="/my-cvs" element={<MyCvs />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
