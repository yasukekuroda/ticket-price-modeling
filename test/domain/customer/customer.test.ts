import { Age, Customer } from "domain/customer";
import {
  CINEMA_CITIZEN_CATEGORY,
  DISABILITY_CATEGORY,
  SCHOOL_CATEGORY,
} from "domain/customer/category";

describe("Customer", () => {
  describe("new", () => {
    describe("異常系", () => {
      test("Ageのインスタンス生成に失敗すると、Customerのインスタンス生成も失敗する", () => {
        const MockAge = jest.fn(() => {
          throw new Error("Age error");
        });
        expect(
          () =>
            new Customer(
              new MockAge(),
              CINEMA_CITIZEN_CATEGORY.MEMBER,
              DISABILITY_CATEGORY.NONE,
              SCHOOL_CATEGORY.NONE,
            ),
        ).toThrow();
      });
    });

    describe("正常系", () => {
      test("Customerのインスタンス生成に成功する", () => {
        expect(
          new Customer(
            new Age(25),
            CINEMA_CITIZEN_CATEGORY.MEMBER,
            DISABILITY_CATEGORY.NONE,
            SCHOOL_CATEGORY.NONE,
          ),
        ).toBeInstanceOf(Customer);
      });
    });
  });
});
