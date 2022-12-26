import "./App.css";
import Restaurants from "./Component/Restaurants";
import Pagination from "./Component/Pagination";

export default function App() {
  return <div className="App">
    <p> hello </p>
    <Restaurants pageNumber="1"/>
    <Pagination/>
  </div>;
}
