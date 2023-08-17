import { Routes, Route} from "react-router-dom";
import Signup from "../pages/Signup";
import Form from "../pages/Form";
import Login from "../pages/Login";
import SingleForm from "../pages/SingleForm";
import PrivateRoute from "../HOC/PrivateRoute";
import SingleSubmitResponse from "../pages/SingleSubmitResponse";

const AllRoutes = () => {
    return(
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singleform/:id" element={<PrivateRoute><SingleForm /></PrivateRoute>} />
        <Route path="/singlesubmitresponse" element={<PrivateRoute> <SingleSubmitResponse /> </PrivateRoute>} />
      </Routes>
    )
};

export default AllRoutes;
