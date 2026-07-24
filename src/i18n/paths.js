export function stripLangPrefix(pathname) {
  return pathname.split("/").slice(2).join("/");
}
