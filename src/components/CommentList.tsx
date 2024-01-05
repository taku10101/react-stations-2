import { useEffect, useState } from "react";
import { getThreadsInterface } from "../types/api";
import { Paper, Grid } from "@mui/material";
import { threadById } from "../api/api";
import { useParams } from "react-router-dom";

const CardList = () => {
  const [data, setData] = useState<getThreadsInterface[] | null>(null);
  const { id } = useParams<{ id: string }>();
  console.log(id);
  useEffect(() => {
    if (!id) return;
    threadById(id)
      .then((jsonData) => setData(jsonData))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Grid
        sx={{
          backgroundColor: "grey",
          py: "10px",
          marginTop: "150px",
        }}
      >
        {data?.map((thread: getThreadsInterface) => (
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
