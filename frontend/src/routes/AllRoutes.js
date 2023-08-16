import { Routes, Route} from "react-router-dom";
import Signup from "../pages/Signup";
import Form from "../pages/Form";
import Login from "../pages/Login";

const AllRoutes = () => {
    return(
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    )
};

export default AllRoutes;
