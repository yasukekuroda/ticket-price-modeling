import { Age, Customer } from "domain/customer";
import {
  CINEMA_CITIZEN_CATEGORY,
  DISABILITY_CATEGORY,
  SCHOOL_CATEGORY,
} from "domain/customer/category";
import { CinemaDate } from "domain/date";
import { InfantAndElementarySchoolStudentPlan } from "domain/plan/implementation";

describe("InfantAndElementarySchoolStudentPlan", () => {
  describe(".isAvailable", () => {
    test("3歳未満の場合、falseを返す", () => {
      const customer = new Customer(
        new Age(2),
        CINEMA_CITIZEN_CATEGORY.GUEST,
        DISABILITY_CATEGORY.NONE,
        SCHOOL_CATEGORY.JUNIOR_HIGH_SCHOOL,
      );
      expect(InfantAndElementarySchoolStudentPlan.isAvailable(customer)).toBe(
        false,
      );
    });

    test("13歳以上の場合、falseを返す", () => {
      const customer = new Customer(
        new Age(13),
        CINEMA_CITIZEN_CATEGORY.GUEST,
        DISABILITY_CATEGORY.NONE,
        SCHOOL_CATEGORY.SENIOR_HIGH_SCHOOL,
      );
      expect(InfantAndElementarySchoolStudentPlan.isAvailable(customer)).toBe(
        false,
      );
    });

    test("3歳以上の場合、trueを返す", () => {
      const customer = new Customer(
        new Age(3),
        CINEMA_CITIZEN_CATEGORY.GUEST,
        DISABILITY_CATEGORY.NONE,
        SCHOOL_CATEGORY.GRADUATE_SCHOOL,
      );
      expect(InfantAndElementarySchoolStudentPlan.isAvailable(customer)).toBe(
        true,
      );
    });
    test("12歳以下の場合、trueを返す", () => {
      const customer = new Customer(
        new Age(12),
        CINEMA_CITIZEN_CATEGORY.GUEST,
        DISABILITY_CATEGORY.NONE,
        SCHOOL_CATEGORY.GRADUATE_SCHOOL,
      );
      expect(InfantAndElementarySchoolStudentPlan.isAvailable(customer)).toBe(
        true,
      );
    });
  });

  describe(".price", () => {
    describe("映画の日", () => {
      test("平日20時までの場合、1000円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-09-01T19:59:59.000+09:00");
        expect(
          InfantAndElementarySchoolStudentPlan.price(cinemaWeekday).value,
        ).toBe(1000);
      });
      test("平日20時以降の場合、1000円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-09-01T20:00:00.000+09:00");
        expect(
          InfantAndElementarySchoolStudentPlan.price(cinemaWeekday).value,
        ).toBe(1000);
      });

      test("土日20時までの場合、1000円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-11-01T19:59:59.000+09:00");
        expect(
          InfantAndElementarySchoolStudentPlan.price(cinemaWeekday).value,
        ).toBe(1000);
      });
      test("土日20時以降の場合、1000円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-11-01T20:00:00.000+09:00");
        expect(
          InfantAndElementarySchoolStudentPlan.price(cinemaWeekday).value,
        ).toBe(1000);
      });
    });

    describe("映画の日 以外", () => {
      test("平日20時までの場合、1000円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-09-03T19:59:59.000+09:00");
        expect(
          InfantAndElementarySchoolStudentPlan.price(cinemaWeekday).value,
        ).toBe(1000);
      });
      test("平日20時以降の場合、1000円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-09-03T20:00:00.000+09:00");
        expect(
          InfantAndElementarySchoolStudentPlan.price(cinemaWeekday).value,
        ).toBe(1000);
      });

      test("土日20時までの場合、1000円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-09-06T19:59:59.000+09:00");
        expect(
          InfantAndElementarySchoolStudentPlan.price(cinemaWeekday).value,
        ).toBe(1000);
      });
      test("土日20時以降の場合、1000円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-09-06T20:00:00.000+09:00");
        expect(
          InfantAndElementarySchoolStudentPlan.price(cinemaWeekday).value,
        ).toBe(1000);
      });
    });
  });
});
