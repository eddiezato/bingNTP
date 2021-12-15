function updateIcon(c) {
    if (!c.matches) {
        document.querySelector('link[rel="icon"]').href = `favw.ico`;    
    }    
}
const m = window.matchMedia("(prefers-color-scheme: dark)");
m.addEventListener("change", updateIcon);
updateIcon(m);