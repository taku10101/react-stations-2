import { Routes, Route } from "react-router";
import ThreadsPost from "./views/ThreadsPost";
import ThreadList from "./views/ThreadList";
import ThreadsList from "./views/ThreadsList";
import { BrowserRouter } from "react-router-dom";
import CommonHeader from "./components/CommonHeader";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CommonHeader />}>
            <Route path='/' element={<ThreadsList />} />
            <Route path='/threads/:id' element={<ThreadList />} />
            <Route path='/posts' element={<ThreadsPost />} />
            <Route path='*' element={<div>Not Found</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
