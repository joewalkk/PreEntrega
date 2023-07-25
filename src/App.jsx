
import { Navbarr } from "./components/Navbar/Navbar.jsx";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { Detail } from "./pages/Detail.jsx";
import { Home } from "./pages/Home.jsx";
import { Category } from "./pages/Category.jsx";


const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Navbarr />}>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<Detail />} />
        <Route path="/category/:id" element={<Category />} />
      </Route>

    </>
  )
)


function App() {


  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App
