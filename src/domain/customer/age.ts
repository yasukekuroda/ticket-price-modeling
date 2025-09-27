export class Age {
  readonly MINIMUM_AGE = 0;
  readonly MAXIMUM_AGE = 200;

  constructor(public readonly value: number) {
    if (!Number.isInteger(value)) throw new Error("Age must be an integer.");
    if (value < this.MINIMUM_AGE)
      throw new Error(`Age must be at least ${this.MINIMUM_AGE}.`);
    if (value > this.MAXIMUM_AGE)
      throw new Error(`Age must be at most ${this.MAXIMUM_AGE}.`);
  }
}
