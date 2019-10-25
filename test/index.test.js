import { module1, module2 } from "@libs";

test("module1", () => {
  expect(module1()).toBe("module1 argument: undefined");
  expect(module1("foo")).toBe("module1 argument: foo");
});

test("module2", () => {
  expect(module2()).toBe("module2 argument: undefined");
  expect(module2("foo")).toBe("module2 argument: foo");
});
