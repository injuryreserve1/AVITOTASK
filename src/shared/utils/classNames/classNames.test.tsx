import { classNames } from "./classNames";
import { describe, test, expect } from "vitest";

describe("classNames", () => {
  test("test with no additional classes", () => {
    const expected = "someClass";
    expect(classNames("someClass")).toBe(expected);
  });

  test("test with additional classes", () => {
    const expected = "someClass class1 class2";
    expect(classNames("someClass", {}, ["class1", "class2"])).toBe(expected);
  });

  test("with mods", () => {
    const expected = "someClass class1 class2 hovered";
    expect(
      classNames("someClass", { hovered: true }, ["class1", "class2"]),
    ).toBe(expected);
  });
});
