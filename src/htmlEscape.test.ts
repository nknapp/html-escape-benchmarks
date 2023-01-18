import { htmlEscapeFunctions } from ".";

const input = "tä ฤ 🍓 😅 & xx <>\"'`= abc";
const expected = "tä ฤ 🍓 😅 &amp; xx &lt;&gt;&quot;&#x27;&#x60;&#x3D; abc";

describe("htmlEscape", () => {
  for (const fn of htmlEscapeFunctions) {
    it(fn.name, () => {
      expect(fn(input)).toBe(expected);  
    })

    it(fn.name +" no escape", () => {
      expect(fn("tä ฤ 🍓 😅 ")).toBe("tä ฤ 🍓 😅 ")
    })
  }
});
