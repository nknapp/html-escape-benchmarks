import { bench } from "vitest";
import { htmlEscapeFunctions } from ".";

function unscapedChars(count: number) {
  return `${count} chars between escaped chars -------------`.repeat(Math.ceil(count / 40)).slice(0,count)
}

const strings: string[] = [
  unscapedChars(5),
  unscapedChars(10),
  (unscapedChars(5) + ">").repeat(2),
    (unscapedChars(5) + "<").repeat(10),
  (unscapedChars(10) + "<").repeat(10),
  (unscapedChars(20) + "<").repeat(10),
  (unscapedChars(50) + "<").repeat(10),
  (unscapedChars(100) + "<").repeat(10),
  (unscapedChars(200) + "<").repeat(10),
  (unscapedChars(500) + "<").repeat(10),
  (unscapedChars(1000) + "<").repeat(10),
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
