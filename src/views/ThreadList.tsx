import { Paper } from "@mui/material";
import CommentList from "../components/CommentList";
import CommentPost from "../components/CommentPost";
import { useEffect, useState } from "react";
import { getThreadsInterface } from "../types/api";
import { threadById } from "../api/api";
import { useParams } from "react-router-dom";
const ThreadsList = () => {
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
      <Paper>
        <h1>スレッド新規作成</h1>
        <CommentList data={data || []} />
        <CommentPost />
      </Paper>
    </>
  );
};

export default ThreadsList;
