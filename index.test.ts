import prefersReducedTransparency from "./index";

test("should be a string", () => {
  expect(typeof prefersReducedTransparency()).toBe("string");
});

test("should be high, low or no-preference", () => {
  expect(["high", "low", "no-preference"].includes(prefersReducedTransparency())).toBeTruthy();
});

test("should be high, no-preference, or unknown", () => {
  expect(["high", "low", "no-preference", "unknown"].includes(prefersReducedTransparency())).toBeTruthy();
});
