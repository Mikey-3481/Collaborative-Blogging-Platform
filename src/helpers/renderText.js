function renderText(string) {
  return string
    .replace(/<\/[^>]+>/g, " ")
    .replace(/<\/?[^>]+(>|$)/g, "")
    .trim();
}

export default renderText;
