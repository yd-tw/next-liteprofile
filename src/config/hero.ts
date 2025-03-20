type Achievement = {
  metric: string;
  value: string;
  postfix?: string;
  prefix?: string;
};

export const achievementsList: Achievement[] = [
  { metric: "APCS", value: "4", postfix: "級" },
  { metric: "競賽獲獎", value: "20", postfix: "+" },
  { metric: "服務使用者", value: "1000", postfix: "+" },
  { metric: "專案數量", value: "30", postfix: "+" },
  { metric: "社群追蹤數", value: "150", postfix: "+" },
];
