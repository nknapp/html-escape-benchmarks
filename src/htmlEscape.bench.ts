import { bench } from "vitest";
import { htmlEscapeFunctions } from ".";

const strings: string[] = [
  "string without escaped chars",
  "string with all escaped chars: <=>&'`\"",
  "a very long string with lots of escapes " + "<=>&'`\"".repeat(1000),
  "a very logn string with lots of space between escapes" + "<=>&'`\"".repeat(1000),
];

for (const string of strings) {
  describe("htmlEscape " + string.substring(0, 50) + " ("+ string.length + " chars)", () => {
    for (const fn of htmlEscapeFunctions) {
      bench(fn.name, () => {
        fn(string);
      });
    }
  });
}
