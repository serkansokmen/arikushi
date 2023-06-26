// src/index.test.ts
import Converter from "./index";

const a = new Converter();

describe("arikushi", function () {
  describe("convert", function () {
    it("should return a string result", function () {
      expect(typeof a.convert("Lorem", "ipsum")).toBe("string");
    });

    it("should return an empty string if parameter is numeric", function () {
      expect(a.convert(1234 as unknown as string)).toHaveLength(0);
      expect(a.convert("1234")).toHaveLength(0);
    });

    it("should return an empty string if no param given", function () {
      expect(a.convert()).toHaveLength(0);
    });

    it("should work with chars not in mapping", function () {
      expect(a.convert("ÜĞİŞÇÖüğışçö")).toHaveLength(0);
    });

    it("should not have `undefined` in result", function () {
      expect(a.convert("lorem", "ipsum")).not.toContain("undefined");
    });
  });

  describe("random", function () {
    it("should return a random result", function () {
      const r0 = a.random(3);
      expect(typeof r0).toBe("string");
      const r1 = a.random(3);
      expect(typeof r1).toBe("string");
      expect(r0).not.toBe(r1);
    });

    it("should work with multiple parameters", function () {
      const r0 = a.random(3, 4, 5);
      expect(typeof r0).toBe("string");
      const r1 = a.random(3, 4, 5);
      expect(typeof r1).toBe("string");
      expect(r0).not.toBe(r1);
    });
  });

  describe("getMapping", function () {
    it("should return the list of available mappings", function () {
      expect(typeof a.getMapping()).toBe("object");
    });
  });
});
