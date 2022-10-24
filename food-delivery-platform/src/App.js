import "./App.css";
// import AddDishComponent from "./components/AddDishComponent";
// import AddRestaurentComponent from "./components/AddRestaurentComponent";
import DishCardComponentList from "./components/DishCardComponentList";
// import YourRestaurantComponent from "./components/YourRestaurantComponent";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      {/* <AddRestaurentComponent />
      <YourRestaurantComponent />
      <AddDishComponent /> */}
      <DishCardComponentList />
    </div>
  );
}

export default App;
