import { Customer } from "domain/customer";
import { SCHOOL_CATEGORY } from "domain/customer/category";
import { CinemaDate } from "domain/date";
import { Plan } from "domain/plan/core";
import { Price } from "domain/pricing";

export const UniversityStudentPlan: Plan = class {
  static planName(): string {
    return "学生（大・専）";
  }

  static isAvailable(customer: Customer): boolean {
    if (customer.schoolCategory === SCHOOL_CATEGORY.UNIVERSITY) return true;
    if (customer.schoolCategory === SCHOOL_CATEGORY.VOCATIONAL_SCHOOL)
      return true;
    if (customer.schoolCategory === SCHOOL_CATEGORY.GRADUATE_SCHOOL)
      return true;

    return false;
  }

  static price(cinemaDate: CinemaDate): Price {
    if (cinemaDate.isCinemaDay()) return new Price(1300);

    return new Price(1500);
  }
};
