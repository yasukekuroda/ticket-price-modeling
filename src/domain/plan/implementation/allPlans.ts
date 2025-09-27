import { Plan } from "domain/plan/core/plan";
import { Plans } from "domain/plan/core/plans";
import { CinemaCitizenPlan } from "domain/plan/implementation/cinemaCitizenPlan";
import { CinemaCitizenSeniorPlan } from "domain/plan/implementation/cinemaCitizenSeniorPlan";
import { DisabilityPlan } from "domain/plan/implementation/disabilityPlan";
import { DisabilityUnderHighSchoolStudentPlan } from "domain/plan/implementation/disabilityUnderHighSchoolStudentPlan";
import { GeneralPlan } from "domain/plan/implementation/generalPlan";
import { HighSchoolStudentPlan } from "domain/plan/implementation/highSchoolStudentPlan";
import { InfantAndElementarySchoolStudentPlan } from "domain/plan/implementation/infantAndElementarySchoolStudentPlan";
import { SeniorPlan } from "domain/plan/implementation/seniorPlan";
import { UniversityStudentPlan } from "domain/plan/implementation/universityStudentPlan";

const allPlansArray: Plan[] = [
  CinemaCitizenPlan,
  CinemaCitizenSeniorPlan,
  GeneralPlan,
  SeniorPlan,
  UniversityStudentPlan,
  HighSchoolStudentPlan,
  InfantAndElementarySchoolStudentPlan,
  DisabilityPlan,
  DisabilityUnderHighSchoolStudentPlan,
];

export const allPlans = new Plans(allPlansArray);
