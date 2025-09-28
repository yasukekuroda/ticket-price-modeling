import { Customer } from "domain/customer";
import { CinemaDate } from "domain/date";
import { Plan } from "domain/plan/core";
import { allPlans } from "domain/plan/implementation";

export class BestPlanCalculator {
  static calculate(customer: Customer, cinemaDate: CinemaDate): Plan {
    const availablePlans = allPlans.availablePlans(customer);
    if (availablePlans.count() === 0) {
      throw new Error("利用できるプランがありません");
    }

    return availablePlans.bestPricePlan(cinemaDate);
  }
}
