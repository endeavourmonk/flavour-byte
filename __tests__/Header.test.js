import sum from "../sum";

test("sum should calculate sum of two no.s", () => {
  const result = sum(2, 3);
  expect(result).toBe(5);
});
