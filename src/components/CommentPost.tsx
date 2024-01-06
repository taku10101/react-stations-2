import { Box, Typography, TextField, Button } from "@mui/material";
import { CreateThreadById } from "../api/api";
import { useState } from "react";
import { useParams } from "react-router";

const CommentPost = () => {
  const [value, setValue] = useState("");

  const { id } = useParams<{ id: string }>();

  async function handleCreateThread(value: string) {
    try {
      if (id === undefined) {
        return;
      }
      const response = await CreateThreadById(id, value);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "white",
        height: "300px",
        padding: "50px",
      }}
    >
      <Typography
        sx={{
          color: "black",
          textAlign: "center",
          fontSize: "30px",
        }}
      >
        コメント追加
      </Typography>

      <form>
        <TextField
          sx={{
            width: "100%",
            marginTop: "50px",
          }}
          id='outlined-basic'
          label='コメント'
          variant='outlined'
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />

        <Button
          sx={{
            width: "100%",
            marginTop: "50px",
            backgroundColor: "lightblue",
          }}
          onClick={() => {
            handleCreateThread(value);
          }}
          disabled={value == ""}
        >
          作成
        </Button>
      </form>
    </Box>
  );
};

export default CommentPost;
