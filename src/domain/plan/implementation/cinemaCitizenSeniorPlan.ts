import { Customer } from "domain/customer";
import { CINEMA_CITIZEN_CATEGORY } from "domain/customer/category";
import { CinemaDate } from "domain/date";
import { Plan } from "domain/plan/core";
import { Price } from "domain/pricing";

export const CinemaCitizenSeniorPlan: Plan = class {
  static readonly MINIMUM_AGE = 60;
  static planName(): string {
    return "シネマシティズン（60才以上）";
  }

  static isAvailable(customer: Customer): boolean {
    if (customer.age.value < this.MINIMUM_AGE) return false;
    if (customer.cinemaCitizenCategory !== CINEMA_CITIZEN_CATEGORY.MEMBER)
      return false;

    return true;
  }

  static price(cinemaDate: CinemaDate): Price {
    return new Price(1000);
  }
};
