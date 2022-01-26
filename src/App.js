import Index from "./Components/Code/Project/Index";
import SinglePage from "./Components/Code/Project/SingleProductPage/SingleProduct"
import MultiProductPage from "./Components/Code/Project/MultiProductPage/MultiProductPage";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      {/* <Index /> */}
      {/* <MultiProductPage /> */}
      <SinglePage />
    </div>
  );
}

export default App;
