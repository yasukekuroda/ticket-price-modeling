import { Age } from "domain/customer/age";

describe("Age", () => {
  describe("new", () => {
    describe("異常系", () => {
      test("小数値の場合、例外が発生する", () => {
        expect(() => new Age(25.5)).toThrow();
      });

      test("マイナス値の場合、例外が発生する", () => {
        expect(() => new Age(-1)).toThrow();
      });

      test("120より大きい値の場合、例外が発生する", () => {
        expect(() => new Age(121)).toThrow();
      });
    });

    describe("正常系", () => {
      test("0の場合、インスタンス生成する", () => {
        expect(new Age(0)).toBeInstanceOf(Age);
      });

      test("120の場合、インスタンス生成する", () => {
        expect(new Age(120)).toBeInstanceOf(Age);
      });
    });
  });
});
