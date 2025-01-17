export default function renderElements(content, containerId) {
  const container = document.getElementById(containerId);

  if (container) {
    container.innerHTML = "";

    container.innerHTML = content;
  }
}
