import { Age, Customer } from "domain/customer";
import { CinemaDate } from "domain/date";
import { BestPlanCalculator } from "domain/pricing";
import { askQuestions } from "./cli/askQuestions";

async function main() {
  const answers = await askQuestions();

  const customer = new Customer(
    new Age(answers.age),
    answers.cinemaCitizenCategory,
    answers.disabilityCategory,
    answers.schoolCategory,
  );
  const date = new CinemaDate();
  const bestPlan = BestPlanCalculator.calculate(customer, date);

  console.log(
    `最適なプランは「${bestPlan.planName()}」です。
    現在日時は${date.toLocaleString()}で、料金は${
      bestPlan.price(date).value
    }円です。`,
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
