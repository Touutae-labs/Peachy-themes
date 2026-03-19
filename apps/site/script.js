/* ── Peachy Collection — Landing Page ── */
(function () {
  "use strict";

  /* ── Variant color dots ── */
  const pinkColors = [
    { label: "Hot Pink", hex: "#FA508C" },
    { label: "Golden", hex: "#FFC85B" },
    { label: "Lavender", hex: "#DCBFF2" },
    { label: "Warm Cream", hex: "#FAE8B6" },
    { label: "Lime", hex: "#9CD162" },
    { label: "Purple", hex: "#E6A1FF" },
  ];

  const peachColors = [
    { label: "Peach", hex: "#ff928b" },
    { label: "Cream", hex: "#efe9ae" },
    { label: "Mint", hex: "#cdeac0" },
    { label: "Soft Pink", hex: "#fec3d6" },
    { label: "Melon", hex: "#ffac81" },
    { label: "Rose", hex: "#fe7c8e" },
  ];

  function $(id) {
    return document.getElementById(id);
  }

  function renderDots(colors, target) {
    if (!target) return;
    target.innerHTML = colors
      .map(
        (c) =>
          `<span class="color-dot" style="background:${c.hex}" title="${c.label} — ${c.hex}"></span>`
      )
      .join("");
  }

  function renderCards(items, target, template) {
    if (!target) return;
    target.innerHTML = items.map(template).join("");
  }

  /* ── Render variant dots ── */
  renderDots(pinkColors, $("pink-dots"));
  renderDots(peachColors, $("peach-dots"));

  /* ── Install guides ── */
  const installGuides = [
    {
      title: "VS Code",
      detail:
        "One extension, two themes. Pick Pink or Peach from the Color Theme picker.",
      code: [
        "code --install-extension Piros-k.peachy-themes",
        "# Ctrl+Shift+P → Color Theme → Peachy Themes",
      ],
    },
    {
      title: "Neovim",
      detail: "Drop-in Lua module. Default is Peach; pass variant for Pink.",
      code: [
        'require("peachy").setup()            -- Peach',
        'require("peachy").setup({ variant = "pink" })',
      ],
    },
    {
      title: "Oh My Posh",
      detail: "Choose peach.omp.json or pink.omp.json for your shell prompt.",
      code: [
        'eval "$(oh-my-posh init zsh --config peach.omp.json)"',
        "# or swap in pink.omp.json",
      ],
    },
    {
      title: "WezTerm",
      detail: "Copy peach.lua or pink.lua into your WezTerm config.",
      code: [
        'local peachy = dofile("~/.config/wezterm/peach.lua")',
        "return { colors = peachy }",
      ],
    },
  ];

  renderCards(
    installGuides,
    $("install-grid"),
    (item) => `
    <article class="install-card">
      <h3>${item.title}</h3>
      <p>${item.detail}</p>
      <div class="code-panel">
        <pre><code>${item.code.join("\n")}</code></pre>
      </div>
    </article>`
  );

  /* ── Palette swatches ── */
  const palette = window.PEACHY_PALETTE?.paletteList || [];
  const swatches = $("swatches");

  if (swatches) {
    palette.forEach(([label, hex]) => {
      const el = document.createElement("article");
      el.className = "swatch";
      el.setAttribute("role", "button");
      el.setAttribute("tabindex", "0");
      el.innerHTML = `
        <div class="swatch-chip" style="background:${hex}"></div>
        <div class="swatch-meta">
          <strong>${label}</strong>
          <span>${hex}</span>
        </div>
      `;
      el.addEventListener("click", () => {
        navigator.clipboard.writeText(hex).then(() => {
          el.querySelector("span").textContent = "Copied!";
          setTimeout(() => {
            el.querySelector("span").textContent = hex;
          }, 1200);
        });
      });
      swatches.appendChild(el);
    });
  }

  /* ── Resource links ── */
  const resources = [
    {
      title: "VS Code Marketplace",
      detail: "Install the extension directly from the Marketplace.",
      href: "https://marketplace.visualstudio.com/items?itemName=Piros-k.peachy-themes",
    },
    {
      title: "GitHub Repo",
      detail: "Source code, issues, and contributions.",
      href: "https://github.com/Touutae-labs/Peachy-themes",
    },
    {
      title: "Documentation",
      detail: "Detailed setup guides for every port.",
      href: "./docs.html",
    },
  ];

  renderCards(
    resources,
    $("resource-grid"),
    (item) => `
    <a class="resource-card" href="${item.href}">
      <h3>${item.title}</h3>
      <p>${item.detail}</p>
    </a>`
  );
})();
