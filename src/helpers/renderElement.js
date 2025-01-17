export default function renderElements(content, containerId) {
  const container = document.getElementById(containerId);
  
  if (container) {
    container.innerHTML = "";

    const wrapperDiv = document.createElement("div");
    wrapperDiv.innerHTML = content;

    container.appendChild(wrapperDiv);
  }
}
