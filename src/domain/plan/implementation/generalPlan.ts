import { Customer } from "domain/customer";
import { CinemaDate } from "domain/date";
import { Plan } from "domain/plan/core";
import { Price } from "domain/pricing";

export const GeneralPlan: Plan = class {
  static planName(): string {
    return "一般";
  }

  static isAvailable(customer: Customer): boolean {
    return true;
  }

  static price(cinemaDate: CinemaDate): Price {
    if (cinemaDate.isCinemaDay()) return new Price(1300);
    if (cinemaDate.isLateShow()) return new Price(1500);

    return new Price(2000);
  }
};
