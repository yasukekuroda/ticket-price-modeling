import { Customer } from "domain/customer";
import { CinemaDate } from "domain/date";
import { Plan } from "./plan";

export class Plans {
  constructor(private readonly plans: Plan[]) {}

  count(): number {
    return this.plans.length;
  }

  availablePlans(customer: Customer): Plans {
    const availablePlans = this.plans.filter((plan: Plan) =>
      plan.isAvailable(customer),
    );

    return new Plans(availablePlans);
  }

  bestPricePlan(date: CinemaDate): Plan {
    return this.plans.reduce((prev: Plan, current: Plan) => {
      return prev.price(date).value < current.price(date).value
        ? prev
        : current;
    });
  }
}
