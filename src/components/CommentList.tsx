<<<<<<< HEAD
import { useEffect, useState } from "react";
import { getThreadInterface } from "../types/api";
import { Paper, Grid } from "@mui/material";
import { threadById } from "../api/api";
import { useParams } from "react-router-dom";

interface PostInterface {
  id: string;
  post: string;
}

const CardList = () => {
  const [data, setData] = useState<getThreadInterface[] | null>(null);
  const { id } = useParams<{ id: string }>();
  console.log(id);
  useEffect(() => {
    threadById(id!)
      .then((jsonData) => setData(jsonData))
      .catch((err) => console.log(err));
  }, []);

  console.log(data);
=======
import { getThreadInterface, getThreadsInterface } from "../types/api";
import { Paper, Grid } from "@mui/material";

const CardList = (props: getThreadInterface[]) => {
>>>>>>> 60d651ff7277bb5f9e229b740e20b3a1d12b2cd4
  return (
    <>
      <Grid
        sx={{
          backgroundColor: "grey",
          py: "10px",
          marginTop: "150px",
        }}
      >
<<<<<<< HEAD
        {data &&
          data.posts.map((post: PostInterface) => (
            <Paper
              key={post.id}
=======
        {props &&
          props?.map((thread: getThreadsInterface) => (
            <Paper
              key={thread.id}
>>>>>>> 60d651ff7277bb5f9e229b740e20b3a1d12b2cd4
              sx={{
                width: "500px",
                height: "200px",
                backgroundColor: "lightblue",
                margin: "30px",
              }}
            >
<<<<<<< HEAD
              <h3>{post.post}</h3>
=======
              <h2>{thread.title}</h2>
>>>>>>> 60d651ff7277bb5f9e229b740e20b3a1d12b2cd4
            </Paper>
          ))}
      </Grid>
    </>
  );
};

export default CardList;
