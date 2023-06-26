
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import {
  createBrowserRouter,
  RouterProvider,
  
  Outlet
} from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import "./app.scss"

const Layout = ()=>{
  return(
    <div className="app">
      <Navbar/>
      <Outlet/> 
      {/* basically it reprsents different pages */}
      <Footer/>
    </div>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
      path: "/",
    element: <Home/>,
      },
      {
        path : "/product/:id",
      element: <Product/>,
        },
        {
          path : "/products/:id",
        element: <Products/>,
          },

    ],
  },
     ]);

function App() {
  return (
    <div>

   <RouterProvider router={router}/>

      
    </div> 
  );  
}

export default App;
