import { Routes, Route } from "react-router";
import ThreadsPost from "./views/ThreadsPost";
import ThreadsList from "./views/ThreadsList";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ThreadsList />} />
          <Route path='/posts' element={<ThreadsPost />} />
          <Route path='*' element={<div>Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
