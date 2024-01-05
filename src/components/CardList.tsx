import { useEffect, useState } from "react";
import { getThreadsInterface } from "../types/api";
import { Paper, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { getThreads } from "../api/api";

const CardList = () => {
  const [data, setData] = useState<getThreadsInterface[] | null>(null);

  useEffect(() => {
    getThreads()
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
            <h3>
              <Link to={`/threads/${thread.id}`}>詳細</Link>
            </h3>
          </Paper>
        ))}
      </Grid>
    </>
  );
};

export default CardList;
