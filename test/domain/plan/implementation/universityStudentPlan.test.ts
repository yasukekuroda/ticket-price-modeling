import { Age, Customer } from "domain/customer";
import {
  CINEMA_CITIZEN_CATEGORY,
  DISABILITY_CATEGORY,
  SCHOOL_CATEGORY,
} from "domain/customer/category";
import { CinemaDate } from "domain/date";
import { UniversityStudentPlan } from "domain/plan/implementation";

describe("UniversityStudentPlan", () => {
  describe(".isAvailable", () => {
    test("大学生の場合、trueを返す", () => {
      const customer = new Customer(
        new Age(20),
        CINEMA_CITIZEN_CATEGORY.GUEST,
        DISABILITY_CATEGORY.NONE,
        SCHOOL_CATEGORY.UNIVERSITY,
      );
      expect(UniversityStudentPlan.isAvailable(customer)).toBe(true);
    });

    test("専門学生の場合、trueを返す", () => {
      const customer = new Customer(
        new Age(20),
        CINEMA_CITIZEN_CATEGORY.GUEST,
        DISABILITY_CATEGORY.NONE,
        SCHOOL_CATEGORY.VOCATIONAL_SCHOOL,
      );
      expect(UniversityStudentPlan.isAvailable(customer)).toBe(true);
    });

    test("大学院生の場合、trueを返す", () => {
      const customer = new Customer(
        new Age(20),
        CINEMA_CITIZEN_CATEGORY.GUEST,
        DISABILITY_CATEGORY.NONE,
        SCHOOL_CATEGORY.GRADUATE_SCHOOL,
      );
      expect(UniversityStudentPlan.isAvailable(customer)).toBe(true);
    });
  });

  describe(".price", () => {
    describe("映画の日", () => {
      test("平日20時までの場合、1300円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-09-01T19:59:59.000+09:00");
        expect(UniversityStudentPlan.price(cinemaWeekday).value).toBe(1300);
      });
      test("平日20時以降の場合、1300円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-09-01T20:00:00.000+09:00");
        expect(UniversityStudentPlan.price(cinemaWeekday).value).toBe(1300);
      });

      test("土日20時までの場合、1300円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-11-01T19:59:59.000+09:00");
        expect(UniversityStudentPlan.price(cinemaWeekday).value).toBe(1300);
      });
      test("土日20時以降の場合、1300円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-11-01T20:00:00.000+09:00");
        expect(UniversityStudentPlan.price(cinemaWeekday).value).toBe(1300);
      });
    });

    describe("映画の日 以外", () => {
      test("平日20時までの場合、1500円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-09-03T19:59:59.000+09:00");
        expect(UniversityStudentPlan.price(cinemaWeekday).value).toBe(1500);
      });
      test("平日20時以降の場合、1500円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-09-03T20:00:00.000+09:00");
        expect(UniversityStudentPlan.price(cinemaWeekday).value).toBe(1500);
      });

      test("土日20時までの場合、1500円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-09-06T19:59:59.000+09:00");
        expect(UniversityStudentPlan.price(cinemaWeekday).value).toBe(1500);
      });
      test("土日20時以降の場合、1500円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-09-06T20:00:00.000+09:00");
        expect(UniversityStudentPlan.price(cinemaWeekday).value).toBe(1500);
      });
    });
  });
});
