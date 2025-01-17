function renderImage(htmlString) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");

  const firstImage = doc.querySelector("img");

  return firstImage ? firstImage.getAttribute("src") : null;
}

export default renderImage;
