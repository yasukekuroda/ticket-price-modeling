export const SCHOOL_CATEGORY = {
  JUNIOR_HIGH_SCHOOL: "juniorHighSchool", // 中学校
  SENIOR_HIGH_SCHOOL: "seniorHighSchool", // 高校
  VOCATIONAL_SCHOOL: "vocationalSchool", // 専門学校
  UNIVERSITY: "university", // 大学
  GRADUATE_SCHOOL: "graduateSchool", // 大学院
  NONE: "none",
} as const;

export type SCHOOL_CATEGORY =
  (typeof SCHOOL_CATEGORY)[keyof typeof SCHOOL_CATEGORY];
