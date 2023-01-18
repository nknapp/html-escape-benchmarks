import { illegalCharRegexGlobal, rules } from "./rules";


const escapeRules: Map<string, string> = new Map(rules);
export function escapeHtmlRegexpExec(string: string): string {
  illegalCharRegexGlobal.lastIndex = 0;
  let result = "";

  let last = 0;
  let match = illegalCharRegexGlobal.exec(string);
  while (match != null) {
    result += string.slice(last, match?.index);
    result += escapeRules.get(match[0]);
    last = illegalCharRegexGlobal.lastIndex;
    match = illegalCharRegexGlobal.exec(string);
  }
  result += string.substring(last);
  return result;
}
