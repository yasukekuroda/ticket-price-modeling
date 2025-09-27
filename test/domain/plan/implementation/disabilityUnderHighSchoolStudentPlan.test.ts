import { Age, Customer } from "domain/customer";
import { CINEMA_CITIZEN_CATEGORY, DISABILITY_CATEGORY, SCHOOL_CATEGORY } from "domain/customer/category";
import { CinemaDate } from "domain/date";
import { DisabilityUnderHighSchoolStudentPlan } from "domain/plan/implementation";

describe("DisabilityUnderHighSchoolStudentPlan", () => {
  describe(".isAvailable", () => {
    describe("障がい者手帳を持つ", () => {
      test("大学以上の場合、falseを返す", () => {
        const customer = new Customer(
          new Age(2),
          CINEMA_CITIZEN_CATEGORY.GUEST,
          DISABILITY_CATEGORY.HANDICAPPED,
          SCHOOL_CATEGORY.UNIVERSITY,
        );
        expect(DisabilityUnderHighSchoolStudentPlan.isAvailable(customer)).toBe(
          false,
        );
      });
      test("高校生以下の場合、trueを返す", () => {
        const customer = new Customer(
          new Age(2),
          CINEMA_CITIZEN_CATEGORY.GUEST,
          DISABILITY_CATEGORY.HANDICAPPED,
          SCHOOL_CATEGORY.SENIOR_HIGH_SCHOOL,
        );
        expect(DisabilityUnderHighSchoolStudentPlan.isAvailable(customer)).toBe(
          true,
        );
      });
    });
    describe("障がい者手帳を持たない", () => {
      test("常に、falseを返す", () => {
        const customer = new Customer(
          new Age(2),
          CINEMA_CITIZEN_CATEGORY.GUEST,
          DISABILITY_CATEGORY.NONE,
          SCHOOL_CATEGORY.SENIOR_HIGH_SCHOOL,
        );
        expect(DisabilityUnderHighSchoolStudentPlan.isAvailable(customer)).toBe(
          false,
        );
      });
    });
  });

  describe(".price", () => {
    describe("映画の日", () => {
      test("平日20時までの場合、900円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-09-01T19:59:59.000+09:00");
        expect(DisabilityUnderHighSchoolStudentPlan.price(cinemaWeekday).value).toBe(900);
      });
      test("平日20時以降の場合、900円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-09-01T20:00:00.000+09:00");
        expect(DisabilityUnderHighSchoolStudentPlan.price(cinemaWeekday).value).toBe(900);
      });

      test("土日20時までの場合、900円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-11-01T19:59:59.000+09:00");
        expect(DisabilityUnderHighSchoolStudentPlan.price(cinemaWeekday).value).toBe(900);
      });
      test("土日20時以降の場合、900円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-11-01T20:00:00.000+09:00");
        expect(DisabilityUnderHighSchoolStudentPlan.price(cinemaWeekday).value).toBe(900);
      });
    });

    describe("映画の日 以外", () => {
      test("平日20時までの場合、900円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-09-03T19:59:59.000+09:00");
        expect(DisabilityUnderHighSchoolStudentPlan.price(cinemaWeekday).value).toBe(900);
      });
      test("平日20時以降の場合、900円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-09-03T20:00:00.000+09:00");
        expect(DisabilityUnderHighSchoolStudentPlan.price(cinemaWeekday).value).toBe(900);
      });

      test("土日20時までの場合、900円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-09-06T19:59:59.000+09:00");
        expect(DisabilityUnderHighSchoolStudentPlan.price(cinemaWeekday).value).toBe(900);
      });
      test("土日20時以降の場合、900円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-09-06T20:00:00.000+09:00");
        expect(DisabilityUnderHighSchoolStudentPlan.price(cinemaWeekday).value).toBe(900);
      });
    });
  });
});
