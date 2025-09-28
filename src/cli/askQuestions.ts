import { Age } from "domain/customer";
import {
    CINEMA_CITIZEN_CATEGORY,
    DISABILITY_CATEGORY,
    SCHOOL_CATEGORY,
} from "domain/customer/category";
import prompts from "prompts";

export interface PromptAnswers {
  age: number;
  cinemaCitizenCategory: CINEMA_CITIZEN_CATEGORY;
  disabilityCategory: DISABILITY_CATEGORY;
  schoolCategory: SCHOOL_CATEGORY;
}

export async function askQuestions(): Promise<PromptAnswers> {
  const answers = await prompts(
    [
      {
        type: "number",
        name: "age",
        message: `年齢を入力してください(${Age.MINIMUM_AGE}-${Age.MAXIMUM_AGE}):`,
        min: Age.MINIMUM_AGE,
        max: Age.MAXIMUM_AGE,
      },
      {
        type: "select",
        name: "cinemaCitizenCategory",
        message: "シネマ会員ですか?",
        choices: [
          { title: "No", value: CINEMA_CITIZEN_CATEGORY.GUEST },
          { title: "Yes", value: CINEMA_CITIZEN_CATEGORY.MEMBER },
        ],
      },
      {
        type: "select",
        name: "disabilityCategory",
        message: "障害者割引対象ですか?",
        choices: [
          { title: "No", value: DISABILITY_CATEGORY.NONE },
          { title: "Yes", value: DISABILITY_CATEGORY.HANDICAPPED },
        ],
      },
      {
        type: "select",
        name: "schoolCategory",
        message: "学校属性を選択してください?",
        choices: [
          { title: SCHOOL_CATEGORY.NONE, value: SCHOOL_CATEGORY.NONE },
          {
            title: SCHOOL_CATEGORY.JUNIOR_HIGH_SCHOOL,
            value: SCHOOL_CATEGORY.JUNIOR_HIGH_SCHOOL,
          },
          {
            title: SCHOOL_CATEGORY.SENIOR_HIGH_SCHOOL,
            value: SCHOOL_CATEGORY.SENIOR_HIGH_SCHOOL,
          },
          {
            title: SCHOOL_CATEGORY.VOCATIONAL_SCHOOL,
            value: SCHOOL_CATEGORY.VOCATIONAL_SCHOOL,
          },
          {
            title: SCHOOL_CATEGORY.UNIVERSITY,
            value: SCHOOL_CATEGORY.UNIVERSITY,
          },
          {
            title: SCHOOL_CATEGORY.GRADUATE_SCHOOL,
            value: SCHOOL_CATEGORY.GRADUATE_SCHOOL,
          },
        ],
      },
    ],
    {
      onCancel: () => {
        console.log("キャンセルされました。\n");
        process.exit(1);
      },
    },
  );

  return answers as PromptAnswers;
}
