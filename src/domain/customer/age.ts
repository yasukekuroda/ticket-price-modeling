export class Age {
  static readonly MINIMUM_AGE = 0;
  static readonly MAXIMUM_AGE = 200;

  constructor(public readonly value: number) {
    if (!Number.isInteger(value)) throw new Error("Age must be an integer.");
    if (value < Age.MINIMUM_AGE)
      throw new Error(`Age must be at least ${Age.MINIMUM_AGE}.`);
    if (value > Age.MAXIMUM_AGE)
      throw new Error(`Age must be at most ${Age.MAXIMUM_AGE}.`);
  }
}
