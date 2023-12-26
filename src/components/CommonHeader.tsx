import { Box } from "@mui/material";
import { Outlet, Link } from "react-router-dom";

const CommonHeader = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          color: "white",
        }}
      >
        <h1>My Website</h1>
        <h2>
          <Link to={"/posts"}> スレッドを立てる</Link>
        </h2>
        <Outlet />
      </Box>
    </>
  );
};

export default CommonHeader;
