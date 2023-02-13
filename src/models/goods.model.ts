export type Goods = {
  userId: number;
  id: number;
  info: string;
  title: string;
};

export const initGoods: Goods[] = [
  {
    userId: 1,
    id: 1,
    info: "Very good wine",
    title: "wine",
  },
  {
    userId: 1,
    id: 2,
    info: "Very good apple",
    title: "apple",
  },
  {
    userId: 1,
    id: 3,
    info: "Very good peach",
    title: "peach",
  },
  {
    userId: 1,
    id: 4,
    info: "Very good orange",
    title: "orange",
  },
  {
    userId: 1,
    id: 5,
    info: "Very good cola",
    title: "cola",
  },
];
