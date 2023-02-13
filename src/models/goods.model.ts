// export type Goods = {
//   userId: number;
//   id: number;
//   info: string;
//   title: string;
// };
export interface GoodsList {
  userId: number;
  id: number;
  info: string;
  title: string;
}

interface selectDataInt {
  title: string;
  introduction: string;
  page: number;
  count: number;
  pageSize: number;
}

export class initData {
  selectData: selectDataInt = {
    title: "",
    introduction: "",
    page: 1,
    count: 0,
    pageSize: 10,
  };
  list: GoodsList[] = [];
}

// export const initGoods: Goods[] = [
//   {
//     userId: 1,
//     id: 1,
//     info: "Very good wine",
//     title: "wine",
//   },
//   {
//     userId: 1,
//     id: 2,
//     info: "Very good apple",
//     title: "apple",
//   },
//   {
//     userId: 1,
//     id: 3,
//     info: "Very good peach",
//     title: "peach",
//   },
//   {
//     userId: 1,
//     id: 4,
//     info: "Very good orange",
//     title: "orange",
//   },
//   {
//     userId: 1,
//     id: 5,
//     info: "Very good cola",
//     title: "cola",
//   },
// ];
