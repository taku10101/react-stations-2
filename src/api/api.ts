const BaseUrl = "2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com ";
function threadsAll() {
  return fetch(`${BaseUrl}/threads`)
    .then((res) => res.json())
    .catch((e) => console.error(e));
}

function createThread(title: string) {
  const body = {
    title,
  };
  return fetch(`${BaseUrl}/threads`, {
    method: "POST",
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .catch((e) => console.error(e));
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
