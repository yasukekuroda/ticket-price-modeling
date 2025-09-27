import { Plan, Plans } from "domain/plan/core";
import { GeneralPlan, SeniorPlan } from "domain/plan/implementation";

const allPlansArray: Plan[] = [GeneralPlan, SeniorPlan];

export const allPlans = new Plans(allPlansArray);
