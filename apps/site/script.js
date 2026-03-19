const swatches = document.getElementById("swatches");

(window.PEACHY_PALETTE?.paletteList || []).forEach(([label, hex]) => {
  const article = document.createElement("article");
  article.className = "swatch";
  article.innerHTML = `
    <div class="swatch-chip" style="background:${hex}"></div>
    <div class="swatch-meta">
      <strong>${label}</strong>
      <span>${hex}</span>
    </div>
  `;
  swatches.appendChild(article);
});
