const heroStats = [
  ["6", "packages in the collection"],
  ["1", "shared token source"],
  ["4", "theme ports ready to grow"],
  ["1", "docs-first release pipeline"]
];

const packageCards = [
  {
    title: "VS Code Theme",
    badge: "Flagship",
    detail: "The original theme package, now surrounded by docs, assets, and release automation.",
    path: "packages/vscode-theme"
  },
  {
    title: "Tokens",
    badge: "Source of truth",
    detail: "Shared Peachy colors and semantic roles used across the website and packages.",
    path: "packages/tokens"
  },
  {
    title: "Generator",
    badge: "Build step",
    detail: "Produces shared CSS and JSON exports from the token file so the collection stays in sync.",
    path: "packages/generator"
  },
  {
    title: "LazyVim",
    badge: "Port",
    detail: "A Neovim colorscheme module that mirrors the Peachy syntax feel for editor users.",
    path: "packages/lazyvim"
  },
  {
    title: "Oh My Posh",
    badge: "Port",
    detail: "A shell prompt theme that keeps the same background, accent, and terminal mood.",
    path: "packages/oh-my-posh"
  },
  {
    title: "WezTerm",
    badge: "Port",
    detail: "A matching terminal palette for users who want the Peachy identity everywhere.",
    path: "packages/wezterm"
  }
];

const installGuides = [
  {
    title: "VS Code",
    badge: "Marketplace",
    detail: "Install the flagship extension from the Marketplace or package it locally for release testing.",
    code: [
      "Marketplace: https://marketplace.visualstudio.com/items?itemName=Piros-k.peachy-themes&ssr=false#overview",
      "Local check: npm run check"
    ]
  },
  {
    title: "LazyVim",
    badge: "Drop-in module",
    detail: "Use the module as a Peachy colorscheme entry point while the standalone repo/export continues to grow.",
    code: [
      'require("peachy").setup()',
      'vim.cmd.colorscheme("peachy")'
    ]
  },
  {
    title: "Oh My Posh",
    badge: "Theme file",
    detail: "Point Oh My Posh to the Peachy config file locally or from a raw GitHub URL.",
    code: [
      'oh-my-posh init pwsh --config ~/themes/peachy.omp.json | Invoke-Expression',
      'oh-my-posh init bash --config ~/themes/peachy.omp.json'
    ]
  },
  {
    title: "WezTerm",
    badge: "Palette",
    detail: "Copy the Peachy Lua palette into your WezTerm config and reference it as a custom color scheme.",
    code: [
      'local colors = require("peachy")',
      'return { color_schemes = { peachy = colors }, color_scheme = "peachy" }'
    ]
  }
];

const portCards = [
  {
    title: "VS Code",
    badge: "Ready",
    detail: "Complete theme package with manifest, icon, docs, and release workflow support."
  },
  {
    title: "LazyVim",
    badge: "Growing",
    detail: "Good highlight coverage for core UI, diagnostics, and Tree-sitter groups."
  },
  {
    title: "Oh My Posh",
    badge: "Growing",
    detail: "Prompt segments are present and ready to expand as release needs change."
  },
  {
    title: "WezTerm",
    badge: "Starter",
    detail: "A shared terminal palette is in place and can be promoted to a fuller package later."
  },
  {
    title: "Tokens",
    badge: "Core",
    detail: "The token package keeps colors, roles, and generator outputs aligned."
  },
  {
    title: "Docs Site",
    badge: "Ready",
    detail: "A docs-first showcase page that explains the repo structure and release flow."
  }
];

const releaseFlow = [
  {
    title: "Generate",
    detail: "Run `npm run generate` to refresh shared CSS and JSON outputs."
  },
  {
    title: "Validate",
    detail: "Run `npm run check` to verify generated assets, JSON, and contrast ratios."
  },
  {
    title: "Tag",
    detail: "Create a semver tag like `v0.1.0` once the package looks right."
  },
  {
    title: "Package",
    detail: "GitHub Actions builds the `.vsix` and release tarballs for the other ports."
  },
  {
    title: "Publish",
    detail: "If the VS Code publisher account is available and `VSCE_PAT` exists, the release workflow can publish the extension."
  }
];

const resources = [
  {
    title: "Root README",
    detail: "The top-level project overview and workspace map.",
    href: "https://github.com/Touutae-labs/Peachy-themes/blob/main/README.md"
  },
  {
    title: "VS Code package",
    detail: "Manifest, docs, examples, and package metadata.",
    href: "https://github.com/Touutae-labs/Peachy-themes/tree/main/packages/vscode-theme"
  },
  {
    title: "LazyVim package",
    detail: "The Neovim colorscheme module and supporting README.",
    href: "https://github.com/Touutae-labs/Peachy-themes/tree/main/packages/lazyvim"
  },
  {
    title: "Oh My Posh package",
    detail: "Prompt theme and usage notes.",
    href: "https://github.com/Touutae-labs/Peachy-themes/tree/main/packages/oh-my-posh"
  },
  {
    title: "WezTerm palette",
    detail: "The terminal color scheme table.",
    href: "https://github.com/Touutae-labs/Peachy-themes/tree/main/packages/wezterm"
  },
  {
    title: "Release workflow",
    detail: "The GitHub Actions pipeline that packages and publishes releases.",
    href: "https://github.com/Touutae-labs/Peachy-themes/blob/main/.github/workflows/release.yml"
  },
  {
    title: "Deep docs",
    detail: "Detailed installation, token, generator, and contribution notes.",
    href: "./docs.html"
  }
];

const statTarget = document.getElementById("hero-stats");
const packageTarget = document.getElementById("package-grid");
const installTarget = document.getElementById("install-grid");
const portsTarget = document.getElementById("ports-grid");
const releaseTarget = document.getElementById("release-flow");
const resourcesTarget = document.getElementById("resource-grid");
const swatches = document.getElementById("swatches");

const renderBadgeRow = (items) =>
  items
    .map(
      ([value, label]) => `
        <div class="stat-chip">
          <strong>${value}</strong>
          <span>${label}</span>
        </div>
      `
    )
    .join("");

const renderPackageCards = (items) =>
  items
    .map(
      (item) => `
        <article class="card">
          <div class="meta-row">
            <span class="badge">${item.badge}</span>
          </div>
          <h3>${item.title}</h3>
          <p>${item.detail}</p>
          <p><a href="https://github.com/Touutae-labs/Peachy-themes/tree/main/${item.path}">Open package</a></p>
        </article>
      `
    )
    .join("");

const renderInstallGuides = (items) =>
  items
    .map(
      (item) => `
        <article class="install-card">
          <div class="meta-row">
            <span class="badge alt">${item.badge}</span>
          </div>
          <h3>${item.title}</h3>
          <p>${item.detail}</p>
          <div class="code-panel">
            <pre><code>${item.code.join("\n")}</code></pre>
          </div>
        </article>
      `
    )
    .join("");

const renderPortCards = (items) =>
  items
    .map(
      (item) => `
        <article class="port-card">
          <div class="meta-row">
            <span class="badge">${item.badge}</span>
          </div>
          <h3>${item.title}</h3>
          <p>${item.detail}</p>
        </article>
      `
    )
    .join("");

const renderTimeline = (items) =>
  items
    .map(
      (item) => `
        <article class="timeline-step">
          <h3>${item.title}</h3>
          <p>${item.detail}</p>
        </article>
      `
    )
    .join("");

const renderResources = (items) =>
  items
    .map(
      (item) => `
        <a class="resource-card" href="${item.href}">
          <h3>${item.title}</h3>
          <p>${item.detail}</p>
        </a>
      `
    )
    .join("");

const palette = window.PEACHY_PALETTE?.paletteList || [];

statTarget.innerHTML = renderBadgeRow(heroStats);
packageTarget.innerHTML = renderPackageCards(packageCards);
installTarget.innerHTML = renderInstallGuides(installGuides);
portsTarget.innerHTML = renderPortCards(portCards);
releaseTarget.innerHTML = renderTimeline(releaseFlow);
resourcesTarget.innerHTML = renderResources(resources);

palette.forEach(([label, hex]) => {
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
