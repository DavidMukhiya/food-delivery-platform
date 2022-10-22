import "./App.css";
import AddDishComponent from "./components/AddDishComponent";
import AddRestaurentComponent from "./components/AddRestaurentComponent";
import YourRestaurantComponent from "./components/YourRestaurantComponent";

function App() {
  return <div className="App">
  <AddRestaurentComponent/>
  <YourRestaurantComponent/>
  <AddDishComponent/>
  </div>;
  
}

export default App;
