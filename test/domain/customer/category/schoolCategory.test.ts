import { SCHOOL_CATEGORY } from "domain/customer/category";

/**
 * memo: このテストは不要かもしれない。自明な値の確認しかしていないため。
 */
describe("SCHOOL_CATEGORY", () => {
  it("中学校：JUNIOR_HIGH_SCHOOLは'juniorHighSchool'である", () => {
    expect(SCHOOL_CATEGORY.JUNIOR_HIGH_SCHOOL).toBe("juniorHighSchool");
  });

  it("高校：SENIOR_HIGH_SCHOOLは'seniorHighSchool'である", () => {
    expect(SCHOOL_CATEGORY.SENIOR_HIGH_SCHOOL).toBe("seniorHighSchool");
  });

  it("専門学校：VOCATIONAL_SCHOOLは'vocationalSchool'である", () => {
    expect(SCHOOL_CATEGORY.VOCATIONAL_SCHOOL).toBe("vocationalSchool");
  });

  it("大学：UNIVERSITYは'university'である", () => {
    expect(SCHOOL_CATEGORY.UNIVERSITY).toBe("university");
  });

  it("大学院：GRADUATE_SCHOOLは'graduateSchool'である", () => {
    expect(SCHOOL_CATEGORY.GRADUATE_SCHOOL).toBe("graduateSchool");
  });

  it("NONEは'none'である", () => {
    expect(SCHOOL_CATEGORY.NONE).toBe("none");
  });
});
