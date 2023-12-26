import { Box } from "@mui/material";
import CardList from "../components/CardList";

const ThreadsList = () => {
  return (
    <Box
      sx={{
        width: "100%",
        color: "white",
      }}
    >
      <CardList />
    </Box>
  );
};

export default ThreadsList;
