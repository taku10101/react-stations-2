import { Routes, Route } from "react-router";
import ThreadsPost from "./views/ThreadsPost";
import ThreadsList from "./views/ThreadsList";
import ThreadList from "./views/ThreadList";
import ThreadPost from "./views/ThreadPost";
ThreadList;
const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<ThreadsList />} />
      <Route path='/posts' element={<ThreadsPost />} />
      <Route path='/posts/:id' element={<ThreadList />} />
      <Route path='/posts/:id' element={<ThreadPost />} />
      <Route path='*' element={<div>Not Found</div>} />
    </Routes>
  );
};

export default Routing;
