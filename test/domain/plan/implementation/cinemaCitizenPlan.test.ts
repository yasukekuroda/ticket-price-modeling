import { Age, Customer } from "domain/customer";
import {
  CINEMA_CITIZEN_CATEGORY,
  DISABILITY_CATEGORY,
  SCHOOL_CATEGORY,
} from "domain/customer/category";
import { CinemaDate } from "domain/date";
import { CinemaCitizenPlan } from "domain/plan/implementation";

describe("CinemaCitizenPlan", () => {
  describe(".isAvailable", () => {
    test("シネマシティズン会員かつ59歳未満の場合、trueを返す", () => {
      const customer = new Customer(
        new Age(59),
        CINEMA_CITIZEN_CATEGORY.MEMBER,
        DISABILITY_CATEGORY.NONE,
        SCHOOL_CATEGORY.NONE,
      );
      expect(CinemaCitizenPlan.isAvailable(customer)).toBe(true);
    });

    test("シネマシティズン会員ではない場合、falseを返す", () => {
      const customer = new Customer(
        new Age(60),
        CINEMA_CITIZEN_CATEGORY.GUEST,
        DISABILITY_CATEGORY.NONE,
        SCHOOL_CATEGORY.NONE,
      );
      expect(CinemaCitizenPlan.isAvailable(customer)).toBe(false);
    });
    test("60歳以上の場合、falseを返す", () => {
      const customer = new Customer(
        new Age(60),
        CINEMA_CITIZEN_CATEGORY.MEMBER,
        DISABILITY_CATEGORY.NONE,
        SCHOOL_CATEGORY.NONE,
      );

      expect(CinemaCitizenPlan.isAvailable(customer)).toBe(false);
    });
  });

  describe(".price", () => {
    describe("映画の日", () => {
      test("平日20時までの場合、1000円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-09-01T19:59:59.000+09:00");
        expect(CinemaCitizenPlan.price(cinemaWeekday).value).toBe(1000);
      });
      test("平日20時以降の場合、1000円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-09-01T20:00:00.000+09:00");
        expect(CinemaCitizenPlan.price(cinemaWeekday).value).toBe(1000);
      });

      test("土日20時までの場合、1300円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-11-01T19:59:59.000+09:00");
        expect(CinemaCitizenPlan.price(cinemaWeekday).value).toBe(1300);
      });
      test("土日20時以降の場合、1000円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-11-01T20:00:00.000+09:00");
        expect(CinemaCitizenPlan.price(cinemaWeekday).value).toBe(1000);
      });
    });

    describe("映画の日 以外", () => {
      test("平日20時までの場合、1000円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-09-03T19:59:59.000+09:00");
        expect(CinemaCitizenPlan.price(cinemaWeekday).value).toBe(1000);
      });
      test("平日20時以降の場合、1000円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-09-03T20:00:00.000+09:00");
        expect(CinemaCitizenPlan.price(cinemaWeekday).value).toBe(1000);
      });

      test("土日20時までの場合、1300円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-09-06T19:59:59.000+09:00");
        expect(CinemaCitizenPlan.price(cinemaWeekday).value).toBe(1300);
      });
      test("土日20時以降の場合、1000円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-09-06T20:00:00.000+09:00");
        expect(CinemaCitizenPlan.price(cinemaWeekday).value).toBe(1000);
      });
    });
  });
});
