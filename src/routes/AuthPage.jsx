import { Outlet, Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login"


const AuthRenderChildInParent = () => {
  return <Outlet />
}
const AuthPage = () => (
  // {/* dont add any route here   if you want to add routes then add in PrivateRoutes file  */}

  <Routes>
    <Route element={<AuthRenderChildInParent />}>
      <Route index element={<Login />} />
    </Route>
  </Routes>
)

export { AuthPage }