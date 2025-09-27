import { Customer } from "domain/customer";
import { CinemaDate } from "domain/date";
import { Plan } from "domain/plan/core";
import { Price } from "domain/pricing";

export const SeniorPlan: Plan = class {
  static readonly MINIMUM_AGE = 70;

  static planName(): string {
    return "シニア（70才以上）";
  }

  static isAvailable(customer: Customer): boolean {
    return customer.age.value >= this.MINIMUM_AGE;
  }

  static price(cinemaDate: CinemaDate): Price {
    return new Price(1300);
  }
};
