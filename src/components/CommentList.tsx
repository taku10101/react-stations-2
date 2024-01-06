import { getThreadInterface, getThreadsInterface } from "../types/api";
import { Paper, Grid } from "@mui/material";

const CardList = (props: getThreadInterface[]) => {
  return (
    <>
      <Grid
        sx={{
          backgroundColor: "grey",
          py: "10px",
          marginTop: "150px",
        }}
      >
        {props &&
          props?.map((thread: getThreadsInterface) => (
            <Paper
              key={thread.id}
              sx={{
                width: "500px",
                height: "200px",
                backgroundColor: "lightblue",
                margin: "30px",
              }}
            >
              <h2>{thread.title}</h2>
            </Paper>
          ))}
      </Grid>
    </>
  );
};

export default CardList;
