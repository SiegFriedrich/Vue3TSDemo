// export type Goods = {
//   userId: number;
//   id: number;
//   info: string;
//   title: string;
// };

//定义接口
export interface GoodsList {
  userId: number;
  id: number;
  company: string;
  info: string;
  title: string;
}

interface selectDataInt {
  title: string;
  introduction: string;
  company: string;
  page: number; //页码
  count: number; //总条数
  pageSize: number; //默认一页显示几条
}

export class initData {
  selectData: selectDataInt = {
    title: "",
    introduction: "",
    company: "",
    page: 1,
    count: 0,
    pageSize: 15,
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
