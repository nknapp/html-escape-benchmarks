import { illegalCharRegexGlobal, rules } from "./rules";

const escapeRules: Map<string, string> = new Map(rules);

function replaceChar(char: string) {
  return escapeRules.get(char) ?? char;
}

export function stringReplaceWithRegexp(string: string): string {
  return string.replace(illegalCharRegexGlobal, replaceChar);
}
