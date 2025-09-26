import { CINEMA_CITIZEN_CATEGORY } from "domain/customer/category";

/**
 * memo: このテストは不要かもしれない。自明な値の確認しかしていないため。
 */
describe("CINEMA_CITIZEN_CATEGORY", () => {
  it("MEMBERは'member'である", () => {
    expect(CINEMA_CITIZEN_CATEGORY.MEMBER).toBe("member");
  });

  it("GUESTは'guest'である", () => {
    expect(CINEMA_CITIZEN_CATEGORY.GUEST).toBe("guest");
  });
});
