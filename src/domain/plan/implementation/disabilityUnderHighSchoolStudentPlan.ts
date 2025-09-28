import { Customer } from "domain/customer";
import { DISABILITY_CATEGORY, SCHOOL_CATEGORY } from "domain/customer/category";
import { CinemaDate } from "domain/date";
import { Plan } from "domain/plan/core";
import { Price } from "domain/pricing";

export const DisabilityUnderHighSchoolStudentPlan: Plan = class {
  static planName(): string {
    return "障がい者（高校以下）";
  }

  static isAvailable(customer: Customer): boolean {
    if (customer.disabilityCategory === DISABILITY_CATEGORY.NONE) return false;
    if (customer.schoolCategory === SCHOOL_CATEGORY.JUNIOR_HIGH_SCHOOL)
      return true;
    if (customer.schoolCategory === SCHOOL_CATEGORY.SENIOR_HIGH_SCHOOL)
      return true;

    return false;
  }

  static price(cinemaDate: CinemaDate): Price {
    return new Price(900);
  }
};
