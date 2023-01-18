import { htmlEscapeFunctions } from ".";

function* createInputs(): Generator<{ input: string; expected: string }> {
  yield {input: "<>\"'`=", expected: "&lt;&gt;&quot;&#x27;&#x60;&#x3D;"}
  for (let i=0; i<10;i++) {
    yield {
      input: "tä ฤ 🍓 😅 & xx <>\"'`= abc".repeat(i),
      expected: "tä ฤ 🍓 😅 &amp; xx &lt;&gt;&quot;&#x27;&#x60;&#x3D; abc".repeat(i),
    };  
  }
}

for (const { input, expected } of createInputs()) {
  describe("htmlEscape input.length="+input.length, () => {
    for (const fn of htmlEscapeFunctions) {
      it(fn.name, () => {
        expect(fn(input)).toBe(expected);
      });

      it(fn.name + " no escape", () => {
        expect(fn("tä ฤ 🍓 😅 ")).toBe("tä ฤ 🍓 😅 ");
      });
    }
  });
}
