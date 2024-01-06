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

  return (
    <>
      <Grid
        sx={{
          backgroundColor: "grey",
          py: "10px",
          marginTop: "150px",
        }}
      >
        {data &&
          data.posts.map((post: PostInterface) => (
            <Paper
              key={post.id}
              sx={{
                width: "500px",
                height: "200px",
                backgroundColor: "lightblue",
                margin: "30px",
              }}
            >
              <h3>{post.post}</h3>
            </Paper>
          ))}
      </Grid>
    </>
  );
};

export default CardList;
