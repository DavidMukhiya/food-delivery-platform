import "./App.css";
import AddDishComponent from "./components/AddDishComponent";
import AddRestaurentComponent from "./components/AddRestaurentComponent";
import DishCardComponentList from "./components/DishCardComponentList";
import YourRestaurantComponent from "./components/YourRestaurantComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import WelcomePageComponent from "./components/WelcomePageComponent";

function App() {
  return (
    <div>
      <WelcomePageComponent />
      <Routes>
        <Route path="/" element={<AddRestaurentComponent />}></Route>
        <Route path="signup" element={<AddRestaurentComponent />}></Route>
        <Route path="login" element={<YourRestaurantComponent />}></Route>
        <Route path="addingdish" element={<AddDishComponent />}></Route>
        <Route path="dish" element={<DishCardComponentList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
