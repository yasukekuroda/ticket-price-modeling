export const SCHOOL_CATEGORY = {
  JUNIOR_HIGH_SCHOOL: "中学校",
  SENIOR_HIGH_SCHOOL: "高校",
  VOCATIONAL_SCHOOL: "専門学校",
  UNIVERSITY: "大学",
  GRADUATE_SCHOOL: "大学院",
  NONE: "該当なし",
} as const;

export type SCHOOL_CATEGORY =
  (typeof SCHOOL_CATEGORY)[keyof typeof SCHOOL_CATEGORY];
