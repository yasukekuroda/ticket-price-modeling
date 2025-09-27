import { Age, Customer } from "domain/customer";
import { CinemaDate } from "domain/date";
import { SeniorPlan } from "domain/plan/implementation";

describe("SeniorPlan", () => {
  describe(".isAvailable", () => {
    test("70歳以上でtrueを返す", () => {
      const mockCustomer = {
        age: new Age(70),
      } as unknown as Customer;
      expect(SeniorPlan.isAvailable(mockCustomer)).toBe(true);
    });
    test("70歳未満でfalseを返す", () => {
      const mockCustomer = {
        age: new Age(69),
      } as unknown as Customer;
      expect(SeniorPlan.isAvailable(mockCustomer)).toBe(false);
    });
  });

  describe(".price", () => {
    describe("映画の日", () => {
      test("平日20時までの場合、1300円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-09-01T19:59:59.000+09:00");
        expect(SeniorPlan.price(cinemaWeekday).value).toBe(1300);
      });
      test("平日20時以降の場合、1300円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-09-01T20:00:00.000+09:00");
        expect(SeniorPlan.price(cinemaWeekday).value).toBe(1300);
      });

      test("土日20時までの場合、1300円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-11-01T19:59:59.000+09:00");
        expect(SeniorPlan.price(cinemaWeekday).value).toBe(1300);
      });
      test("土日20時以降の場合、1300円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-11-01T20:00:00.000+09:00");
        expect(SeniorPlan.price(cinemaWeekday).value).toBe(1300);
      });
    });

    describe("映画の日 以外", () => {
      test("平日20時までの場合、1300円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-09-03T19:59:59.000+09:00");
        expect(SeniorPlan.price(cinemaWeekday).value).toBe(1300);
      });
      test("平日20時以降の場合、1300円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-09-03T20:00:00.000+09:00");
        expect(SeniorPlan.price(cinemaWeekday).value).toBe(1300);
      });

      test("土日20時までの場合、1300円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-09-06T19:59:59.000+09:00");
        expect(SeniorPlan.price(cinemaWeekday).value).toBe(1300);
      });
      test("土日20時以降の場合、1300円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-09-06T20:00:00.000+09:00");
        expect(SeniorPlan.price(cinemaWeekday).value).toBe(1300);
      });
    });
  });
});
