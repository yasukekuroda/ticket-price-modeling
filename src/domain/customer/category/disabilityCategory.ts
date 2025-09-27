export const DISABILITY_CATEGORY = {
  HANDICAPPED: "handicapped",
  NONE: "none",
} as const;

export type DISABILITY_CATEGORY =
  (typeof DISABILITY_CATEGORY)[keyof typeof DISABILITY_CATEGORY];
