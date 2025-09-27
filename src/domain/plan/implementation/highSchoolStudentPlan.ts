import { Customer } from "domain/customer";
import { SCHOOL_CATEGORY } from "domain/customer/category";
import { CinemaDate } from "domain/date";
import { Plan } from "domain/plan/core";
import { Price } from "domain/pricing";

export const HighSchoolStudentPlan: Plan = class {
  static planName(): string {
    return "中・高校生";
  }

  static isAvailable(customer: Customer): boolean {
    if (customer.schoolCategory === SCHOOL_CATEGORY.JUNIOR_HIGH_SCHOOL)
      return true;
    if (customer.schoolCategory === SCHOOL_CATEGORY.SENIOR_HIGH_SCHOOL)
      return true;

    return false;
  }

  static price(cinemaDate: CinemaDate): Price {
    return new Price(1000);
  }
};
