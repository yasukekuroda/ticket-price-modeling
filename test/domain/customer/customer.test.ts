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
        expect(
          () =>
            new Customer(
              new Age(25.5),
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

      test("全てのプロパティが正しくセットされる", () => {
        const age = new Age(30);
        const cinemaCitizenCategory = CINEMA_CITIZEN_CATEGORY.MEMBER;
        const disabilityCategory = DISABILITY_CATEGORY.NONE;
        const schoolCategory = SCHOOL_CATEGORY.NONE;

        const customer = new Customer(
          age,
          cinemaCitizenCategory,
          disabilityCategory,
          schoolCategory,
        );

        expect(customer.age).toBe(age);
        expect(customer.cinemaCitizenCategory).toBe(cinemaCitizenCategory);
        expect(customer.disabilityCategory).toBe(disabilityCategory);
        expect(customer.schoolCategory).toBe(schoolCategory);
      });
    });
  });
});
