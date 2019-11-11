import Maffs from "./index";

it("2+2=4", () => {
  expect(new Maffs(2).plus(2).is()).toEqual(4);
});

it("correct implicit conversion into JS number", () => {
  expect(+new Maffs(2)).toEqual(2);
});

it("2+2=4-1=3", () => {
  const two = new Maffs(0).plus(2);
  const twoPlusTwo = two.plus(2);
  const minusOne = twoPlusTwo.minus(1);

  expect(`man's not hot ${minusOne}`).toBe("man's not hot 3");
});

it("man's not hot", () => {
  const one = new Maffs().plus(2);
  const two = one.plus(2);
  const three = new Maffs(2)
    .minus(1)
    .plus(one)
    .plus(two);

  expect(two.is()).toBe(4);
  expect(7).toBe(7);
});

it("man's hot", () => {
  expect(() => new Maffs("hot")).toThrow(
    "Value has to be number of QuickMaths instance"
  );
});

it("calculate correctly with Maffs instance", () => {
  expect(new Maffs(new Maffs("2")).is()).toBe(2);
});
