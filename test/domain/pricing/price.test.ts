import { Price } from "domain/pricing";

describe("Price", () => {
  describe("new", () => {
    describe("異常系", () => {
      test("小数値の場合、例外が発生する", () => {
        expect(() => new Price(100.5)).toThrow();
      });

      test("マイナス値の場合、例外が発生する", () => {
        expect(() => new Price(-1)).toThrow();
      });

      test("1,000,000より大きい値の場合、例外が発生する", () => {
        expect(() => new Price(1_000_001)).toThrow();
      });
    });

    describe("正常系", () => {
      test("0の場合、インスタンス生成する", () => {
        expect(new Price(0)).toBeInstanceOf(Price);
      });

      test("1,000,000の場合、インスタンス生成する", () => {
        expect(new Price(1_000_000)).toBeInstanceOf(Price);
      });
    });
  });
});
