import { rules } from "./rules";

export function stringReplaceAll(string: string): string {
  return string
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#x27;")
    .replaceAll("`", "&#x60;")
    .replaceAll("=", "&#x3D;");
}
