export const rules: [string, string][] = [
  ["&", "&amp;"],
  ["<", "&lt;"],
  [">", "&gt;"],
  ['"', "&quot;"],
  ["'", "&#x27;"],
  ["`", "&#x60;"],
  ["=", "&#x3D;"],
];

export const illegalCharRegex = /["'&<>=`]/;
export const illegalCharRegexGlobal = /["'&<>=`]/g;

export const charCodeReplaceArray: string[] = [];
charCodeReplaceArray[38] = "&amp;";
charCodeReplaceArray[60] = "&lt;";
charCodeReplaceArray[62] = "&gt;";
charCodeReplaceArray[34] = "&quot;";
charCodeReplaceArray[39] = "&#x27;";
charCodeReplaceArray[96] = "&#x60;";
charCodeReplaceArray[61] = "&#x3D;";
