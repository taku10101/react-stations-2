const BaseUrl = "https://railway.bulletinboard.techtrain.dev";
function threadsAll() {
  return fetch(`${BaseUrl}/threads`)
    .then((res) => res.json())
    .catch((e) => console.error(e));
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

function threadById(id: string) {
  return fetch(`${BaseUrl}/threads/${id}`)
    .then((res) => res.json())
    .catch((e) => console.error(e));
}
function CreateThreadById(post: string) {
  return fetch(`${BaseUrl}/threads/${post}`)
    .then((res) => res.json())
    .catch((e) => console.error(e));
}

export { threadsAll, createThread, threadById, CreateThreadById };
