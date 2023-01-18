import { rules } from "./rules";

export function stringReplaceAll(string: string): string {
  let result = string;
  for (const [find, replace] of rules) {
    result = result.replaceAll(find, replace);
  }
  return result;
}
