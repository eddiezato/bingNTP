function updateIcon(c) {
    const color = c.matches ? "d" : "w";
    document.querySelector('link[rel="icon"]').href = `fav${color}.ico`;
}
const m = window.matchMedia("(prefers-color-scheme: dark)");
m.addEventListener("change", updateIcon);
updateIcon(m);