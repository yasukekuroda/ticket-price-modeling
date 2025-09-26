import { DISABILITY_CATEGORY } from "domain/customer/category";

/**
 * memo: このテストは不要かもしれない。自明な値の確認しかしていないため。
 */
describe("DISABILITY_CATEGORY", () => {
  it("HANDICAPPEDは'handicapped'である", () => {
    expect(DISABILITY_CATEGORY.HANDICAPPED).toBe("handicapped");
  });
  it("NONEは'none'である", () => {
    expect(DISABILITY_CATEGORY.NONE).toBe("none");
  });
});
