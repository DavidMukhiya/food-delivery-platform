import "./App.css";
import AddDishComponent from "./components/AddDishComponent";
import AddRestaurentComponent from "./components/AddRestaurentComponent";
import DishCardComponentList from "./components/user-routes/DishCardComponentList";
import YourRestaurantComponent from "./components/YourRestaurantComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import WelcomePageComponent from "./components/WelcomePageComponent";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./components/user-routes/PrivateRoute";

function App() {
  return (
    <div>
      <WelcomePageComponent />
      <ToastContainer position="top-center" autoClose="2000" />
      <Routes>
        <Route path="/" element={<AddRestaurentComponent />}></Route>
        <Route path="signup" element={<AddRestaurentComponent />}></Route>
        <Route path="login" element={<YourRestaurantComponent />}></Route>
        <Route path="addingdish" element={<AddDishComponent />}></Route>
        <Route path="dish" element={<DishCardComponentList />}></Route>
        <Route path="/restaurant" element={<PrivateRoute />}>
          <Route path="dashboard" element={<DishCardComponentList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
