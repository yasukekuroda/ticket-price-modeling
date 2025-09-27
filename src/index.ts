import { BestPlanCalculator } from "domain/pricing";
import { Age, Customer } from "domain/customer";
import {
  CINEMA_CITIZEN_CATEGORY,
  DISABILITY_CATEGORY,
  SCHOOL_CATEGORY,
} from "domain/customer/category";
import { CinemaDate } from "domain/date";

const customer = new Customer(
  new Age(44),
  CINEMA_CITIZEN_CATEGORY.GUEST,
  DISABILITY_CATEGORY.NONE,
  SCHOOL_CATEGORY.NONE,
);
const date = new CinemaDate();
const bestPlan = BestPlanCalculator.calculate(customer, date);

console.log(
  `最適なプランは「${bestPlan.planName()}」です。
    現在日時は${date.toLocaleString()}で、料金は${
      bestPlan.price(date).value
    }円です。`,
);
