export type User = {
  id: string;
  name: string;
  email: string;
};

export type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};
