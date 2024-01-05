const BaseUrl = "https://railway.bulletinboard.techtrain.dev";
function getThreads() {
  const response = fetch(
    `${BaseUrl}/threads?offset=0
  `,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const resData = response.then((res) => res.json());
  return resData;
}

function createThread(title: string) {
  const body = {
    title,
  };
  const response = fetch(`${BaseUrl}/threads`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const resData = response.then((res) => res.json());
  return resData;
}

function threadById(threadId: string) {
  const response = fetch(`${BaseUrl}/threads/${threadId}/posts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const resData = response.then((res) => res.json());
  return resData;
}

function CreateThreadById(post: string) {
  const response = fetch(`${BaseUrl}/threads/${post}/post`, {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const resData = response.then((res) => res.json());
  return resData;
}

export { getThreads, createThread, threadById, CreateThreadById };
