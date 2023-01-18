import { npmInstallEscapeHtml } from "./htmlEscape/npm-install-escape-html";
import { iterateStringAndSwitch } from "./htmlEscape/iterate-string-and-switch";
import { iterateCharsWithmap } from "./htmlEscape/iterate-chars-with-map";
import { iterateCharsWithRuleArray } from "./htmlEscape/iterate-fast-with-rule-array";
import { escapeHtmlRegexpExec } from "./htmlEscape/re-exec";
import { stringReplaceAll } from "./htmlEscape/string-replaceAll";
import { stringReplaceWithRegexp } from "./htmlEscape/string-replace-with-regexp";
import { iterateTypedArrayUtf8 } from "./htmlEscape/iterate-typed-array-utf-8";
import { iterateTypedArrayUtf16 } from "./htmlEscape/iterate-typed-array-utf16";
import { iterateWithRegexTest } from "./htmlEscape/iterate-with-regex-test";

type HtmlEscape = (string: string) => string;

export const htmlEscapeFunctions: HtmlEscape[] = [
    npmInstallEscapeHtml,
    iterateStringAndSwitch,
    iterateCharsWithmap,
    iterateCharsWithRuleArray,
    escapeHtmlRegexpExec,
    stringReplaceAll,
    stringReplaceWithRegexp,
    iterateTypedArrayUtf8,
    iterateTypedArrayUtf16,
    iterateWithRegexTest
  ];