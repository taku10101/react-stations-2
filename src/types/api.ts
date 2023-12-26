interface getThreadsInterface {
  id: string;
  title: string;
}
interface postThreadInterface {
  threadId: string;
  title: string;
}

interface getThreadInterface {
  id: string;
  title: string;
  posts: {
    id: string;
    content: string;
  }[];
}

interface postPostInterface {
  postId: string;
  threadId: string;
  post: string;
}
export type {
  getThreadsInterface,
  postThreadInterface,
  getThreadInterface,
  postPostInterface,
};
