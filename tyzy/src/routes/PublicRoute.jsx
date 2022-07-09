import { Navigate } from "react-router-dom";

export default function PublicRoutes({isAutenticacition, children}) {
  return !isAutenticacition ? children : <Navigate to='/'/>
}
