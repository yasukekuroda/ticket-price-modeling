import { Age, Customer } from "domain/customer";
import {
  CINEMA_CITIZEN_CATEGORY,
  DISABILITY_CATEGORY,
  SCHOOL_CATEGORY,
} from "domain/customer/category";
import { CinemaDate } from "domain/date";
import { BestPlanCalculator } from "domain/pricing";
import { GeneralPlan, SeniorPlan } from "domain/plan/implementation";

describe("BestPlanCalculator", () => {
  describe(".calculate", () => {
    test("シネマ会員ではなく、20歳の人が平日の20時までに映画を見る場合、一般料金になる", () => {
      const customer = new Customer(
        new Age(15),
        CINEMA_CITIZEN_CATEGORY.MEMBER,
        DISABILITY_CATEGORY.NONE,
        SCHOOL_CATEGORY.SENIOR_HIGH_SCHOOL,
      );
      const cinemaDate = new CinemaDate("2025-09-01T19:59:59.000+09:00");
      expect(BestPlanCalculator.calculate(customer, cinemaDate)).toBe(
        GeneralPlan,
      );
    });

    test("シネマ会員ではなく、80歳の人が平日に映画を見る場合、シニア（70才以上）料金になる", () => {
      const customer = new Customer(
        new Age(80),
        CINEMA_CITIZEN_CATEGORY.GUEST,
        DISABILITY_CATEGORY.HANDICAPPED,
        SCHOOL_CATEGORY.NONE,
      );
      expect(BestPlanCalculator.calculate(customer, new CinemaDate())).toBe(
        SeniorPlan,
      );
    });
  });
});
