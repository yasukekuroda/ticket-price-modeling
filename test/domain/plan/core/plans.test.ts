import { Age, Customer } from "domain/customer";
import {
  CINEMA_CITIZEN_CATEGORY,
  DISABILITY_CATEGORY,
  SCHOOL_CATEGORY,
} from "domain/customer/category";
import { Plan, Plans } from "domain/plan/core";

describe("Plans", () => {
  describe("#count", () => {
    test("plansが空の場合は0を返す", () => {
      const plans = new Plans([]);
      expect(plans.count()).toBe(0);
    });

    test("plansの要素数が1の場合は1を返す.", () => {
      const mockPlan = jest.fn(() => {}) as unknown as Plan;
      const plans = new Plans([mockPlan]);
      expect(plans.count()).toBe(1);
    });
  });

  describe("availablePlans", () => {
    const customer = new Customer(
      new Age(45),
      CINEMA_CITIZEN_CATEGORY.MEMBER,
      DISABILITY_CATEGORY.NONE,
      SCHOOL_CATEGORY.SENIOR_HIGH_SCHOOL,
    );
    test("plansが空の場合は0を返す", () => {
      expect(new Plans([]).availablePlans(customer).count()).toBe(0);
    });

    test("isAvailable()がtrueのPlan数と、availablePlansの数は一致する", () => {
      const availableMock = {
        isAvailable: jest.fn(() => true),
      } as unknown as Plan;
      const unavailableMock = {
        isAvailable: jest.fn(() => false),
      } as unknown as Plan;
      const plans = new Plans([availableMock, unavailableMock, availableMock]);
      const availablePlans = plans.availablePlans(customer);
      expect(availablePlans.count()).toBe(2);
    });
  });
});
