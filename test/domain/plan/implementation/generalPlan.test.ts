import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
import { Customer } from "domain/customer";
import { CinemaDate } from "domain/date";
import { GeneralPlan } from "domain/plan/implementation";

dayjs.extend(isoWeek);

describe("GeneralPlan", () => {
  describe(".isAvailable", () => {
    test("trueを返す", () => {
      const mockCustomer = jest.fn(() => {}) as unknown as Customer;
      expect(GeneralPlan.isAvailable(mockCustomer)).toBe(true);
    });
  });

  describe(".price", () => {
    describe("映画の日", () => {
      test("平日20時までの場合、1300円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-09-01T19:59:59.000+09:00");
        expect(GeneralPlan.price(cinemaWeekday).value).toBe(1300);
      });
      test("平日20時以降の場合、1300円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-09-01T20:00:00.000+09:00");
        expect(GeneralPlan.price(cinemaWeekday).value).toBe(1300);
      });

      test("土日20時までの場合、1300円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-11-01T19:59:59.000+09:00");
        expect(GeneralPlan.price(cinemaWeekday).value).toBe(1300);
      });
      test("土日20時以降の場合、1300円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-11-01T20:00:00.000+09:00");
        expect(GeneralPlan.price(cinemaWeekday).value).toBe(1300);
      });
    });

    describe("映画の日 以外", () => {
      test("平日20時までの場合、2000円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-09-03T19:59:59.000+09:00");
        expect(GeneralPlan.price(cinemaWeekday).value).toBe(2000);
      });
      test("平日20時以降の場合、1500円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-09-03T20:00:00.000+09:00");
        expect(GeneralPlan.price(cinemaWeekday).value).toBe(1500);
      });

      test("土日20時までの場合、2000円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-11-06T19:59:59.000+09:00");
        expect(GeneralPlan.price(cinemaWeekday).value).toBe(2000);
      });
      test("土日20時以降の場合、1500円を返す", () => {
        const cinemaWeekday = new CinemaDate("2025-11-06T20:00:00.000+09:00");
        expect(GeneralPlan.price(cinemaWeekday).value).toBe(1500);
      });
    });
  });
});
