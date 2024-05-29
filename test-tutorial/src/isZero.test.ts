import { isZero } from "./isZero";

test("0を渡すとtrueになる", () => {
    const result = isZero(0);
    expect(result).toBe(true);
});

test("1を渡すとfalseになる", () => {
    const result = isZero(1);
    expect(result).toBe(false);
});