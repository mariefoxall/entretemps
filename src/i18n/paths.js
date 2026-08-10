import { SUPPORTED_LANGUAGES } from "./i18n";

// Strips whatever occupies the leading path segment, whether or not it's a
// valid language — used where that segment is known to be the :lang slot.
export function stripLangPrefix(pathname) {
  return pathname.split("/").slice(2).join("/");
}

// Strips a leading path segment only if it's an actual supported language —
// used where the path may or may not already carry a lang prefix, so a
// redirect never stacks another prefix on top of an existing one.
export function stripKnownLangPrefix(pathname) {
  const segments = pathname.split("/");
  return SUPPORTED_LANGUAGES.includes(segments[1])
    ? segments.slice(2).join("/")
    : segments.slice(1).join("/");
}
