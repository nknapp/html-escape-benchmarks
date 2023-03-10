import { htmlEscapeFunctions } from ".";

function* createInputs(): Generator<{ input: string; expected: string }> {
  yield {input: "<>\"'`=", expected: "&lt;&gt;&quot;&#x27;&#x60;&#x3D;"}
  for (let i=0; i<10;i++) {
    yield {
      input: "tÃ¤ à¸¤ ð ð & xx <>\"'`= abc".repeat(i),
      expected: "tÃ¤ à¸¤ ð ð &amp; xx &lt;&gt;&quot;&#x27;&#x60;&#x3D; abc".repeat(i),
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
        expect(fn("tÃ¤ à¸¤ ð ð ")).toBe("tÃ¤ à¸¤ ð ð ");
      });
    }
  });
}
