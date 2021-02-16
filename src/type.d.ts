type Story = {
  objectID: string;
  url: string;
  title: string;
  author: string;
  created_at_i: number;
  num_comments: number;
  points: number;
};

type Stories = Array<Story>;
