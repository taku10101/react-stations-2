import { Paper } from "@mui/material";
import CommentList from "../components/CommentList";
import CommentPost from "../components/CommentPost";
const ThreadsList = () => {
  return (
    <>
      <Paper>
        <h1>スレッド新規作成</h1>
        <CommentList />
        <CommentPost />
      </Paper>
    </>
  );
};

export default ThreadsList;
