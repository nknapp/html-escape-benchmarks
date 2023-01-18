import { illegalCharRegexGlobal } from "./rules";

export function iterateWithRegexTest(string: string): string {
  illegalCharRegexGlobal.lastIndex = 0;
  let result = "";
  let lastIndex = 0;
  let escape = "";
  while (illegalCharRegexGlobal.test(string)) {
    if (lastIndex < illegalCharRegexGlobal.lastIndex-1) {
      result += string.substring(lastIndex, illegalCharRegexGlobal.lastIndex-1);
    }
    switch (string.charCodeAt(illegalCharRegexGlobal.lastIndex-1)) {
      case 34: // "
        escape = "&quot;";
        break;
      case 38: // &
        escape = "&amp;";
        break;
      case 39: // '
        escape = "&#x27;";
        break;
      case 60: // <
        escape = "&lt;";
        break;
      case 62: // >
        escape = "&gt;";
        break;
      case 96: // `
        escape = "&#x60;";
        break;
      case 61: // `
        escape = "&#x3D;";
        break;
      default:
        continue;
    }
    result += escape;
    lastIndex = illegalCharRegexGlobal.lastIndex;
  }
  result += string.substring(lastIndex)

  return result;
}
