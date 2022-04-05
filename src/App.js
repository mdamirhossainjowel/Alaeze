import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Component/About/About";
import Blog from "./Component/Blog/Blog";
import Dashboard from "./Component/Dashboard/Dashboard";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import NotFound from "./Component/NotFound/NotFound";
import Reviews from "./Component/Reviews/Reviews";

function App() {
  return (
    <div className="mt-5">
      <div className="text-center">
        <Header></Header>
      </div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
    </div>
  );
}

export default App;
