import { Customer } from "domain/customer";
import { CINEMA_CITIZEN_CATEGORY } from "domain/customer/category";
import { CinemaDate } from "domain/date";
import { Plan } from "domain/plan/core";
import { Price } from "domain/pricing";

export const CinemaCitizenPlan: Plan = class {
  static readonly MAXIMUM_AGE = 59;
  static planName(): string {
    return "シネマシティズン";
  }

  static isAvailable(customer: Customer): boolean {
    if (customer.age.value > this.MAXIMUM_AGE) return false;
    if (customer.cinemaCitizenCategory !== CINEMA_CITIZEN_CATEGORY.MEMBER)
      return false;

    return true;
  }

  static price(cinemaDate: CinemaDate): Price {
    if (cinemaDate.isWeekday()) return new Price(1000);
    if (cinemaDate.isLateShow()) return new Price(1000);
    if (cinemaDate.isCinemaDay()) return new Price(1300);

    return new Price(1300);
  }
};
