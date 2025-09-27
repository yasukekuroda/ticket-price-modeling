import { Customer } from "domain/customer";
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
}
