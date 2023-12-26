import React, { useEffect, useState } from "react";
import { getThreadsInterface } from "../types/api";
import CommonHeader from "../components/CommonHeader";

const BaseUrl = "https://railway.bulletinboard.techtrain.dev/";

async function threadsAll() {
  const response = await fetch(`${BaseUrl}/threads?offset=60`);
  console.log(response.body);
  return response.json();
}

const ThreadsList = () => {
  const [data, setData] = useState<getThreadsInterface[] | null>(null);

  useEffect(() => {
    threadsAll()
      .then((jsonData) => setData(jsonData))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <CommonHeader />

      <div
        style={{
          height: "100%",
          display: "flex",
          marginLeft: 3,
        }}
      >
        {data?.map((thread: getThreadsInterface) => (
          <div
            style={{
              border: "1px solid #000",
              padding: "10px",
            }}
            key={thread.id}
          >
            <h3>{thread.title}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default ThreadsList;
