import Home from './Components/Home/Home';
import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";
import { RouterProvider , createBrowserRouter, createHashRouter } from "react-router-dom"
import Layout from './Components/Layout/Layout';
import Notfound from './Components/Notfound/Notfound';
import Categories from './Components/Catogerios/Categories';
import HomeProduct from './Components/Product/HomeProduct';
import ContextContianer from './Components/Context/Context';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Orders from './Components/Orders/Orders';
import YourBag from './Components/Bag/YourBag';
import CheckOut from './Components/Orders/CheckOut/CheckOut';


function App() {

  const routes = createHashRouter([
    {path: '/', element : <Layout/> , children: [
      {index : true , element: <Home/>},
      {path: 'home', element: <Home/>},
      {path: 'categories', element: <Categories/>},
      {path: 'homeproduct', element: <HomeProduct/>},
      {path: 'about', element: <About/>},
      {path: 'contact', element: <Contact/>},
      {path: 'orders', element: <Orders/>},
      {path: 'yourbag', element: <YourBag/>},
      {path: 'checkout', element: <CheckOut/>},
      {path: '*', element: <Notfound/> },
    ]
  }])
  return (
    < >
    <ContextContianer>

    <RouterProvider router={routes} />
    </ContextContianer>

    </>
  );
}

export default App;
