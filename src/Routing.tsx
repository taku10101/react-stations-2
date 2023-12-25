import { Routes, Route } from "react-router";
import Index from "./views/Index";
import Post from "./views/Post";

const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/posts' element={<Post />} />
    </Routes>
  );
};

export default Routing;
