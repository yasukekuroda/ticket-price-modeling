export class Price {
    readonly MINIMUM_PRICE = 0;
    readonly MAXIMUM_PRICE = 1_000_000;

    constructor(public readonly value: number) {
        if (!Number.isInteger(value)) throw new Error("Price must be an integer.");
        if (value < this.MINIMUM_PRICE)
            throw new Error(`Price must be at least ${this.MINIMUM_PRICE}.`);
        if (value > this.MAXIMUM_PRICE)
            throw new Error(`Price must be at most ${this.MAXIMUM_PRICE}.`);
    }
}