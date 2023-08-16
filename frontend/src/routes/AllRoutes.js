import { Routes,Route } from "react-router-dom";
import Signup from "../pages/Signup";


const AllRoutes = () => {
    return (
        <>
        <Routes>
            <Route path="/signup" element={<Signup></Signup>} />
        </Routes>
        </>
    )
}

export default AllRoutes;