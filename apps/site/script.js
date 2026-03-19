const heroStats = [
  ["6", "packages in the collection"],
  ["2", "color variants: Pink + Peach"],
  ["4", "themed ports across editors and terminals"],
  ["1", "automated release pipeline"]
];

const packageCards = [
  {
    title: "VS Code Theme",
    badge: "Flagship",
    detail: "Two variants in one extension: Pink (the original vibrant look) and Peach (a softer token-based palette).",
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
    badge: "2 variants",
    detail: "Neovim colorscheme with Pink and Peach variants — Treesitter, diagnostics, and full UI coverage.",
    path: "packages/lazyvim"
  },
  {
    title: "Oh My Posh",
    badge: "2 variants",
    detail: "Shell prompt with Pink (hot pink + golden) and Peach (soft peach + cream) configs.",
    path: "packages/oh-my-posh"
  },
  {
    title: "WezTerm",
    badge: "2 variants",
    detail: "Terminal palette with Pink and Peach ANSI colors, tab bar styling, and selection highlights.",
    path: "packages/wezterm"
  }
];

const installGuides = [
  {
    title: "VS Code",
    badge: "2 variants",
    detail: "Install one extension, get both Pink (legacy) and Peach (new) themes. Pick your favorite from the Color Theme picker.",
    code: [
      "code --install-extension Piros-k.peachy-themes",
      "# Then: Ctrl+Shift+P → Color Theme → Peachy Themes - Pink or Peach"
    ]
  },
  {
    title: "LazyVim",
    badge: "2 variants",
    detail: "Drop-in Lua module. Default is Peach; pass { variant = \"pink\" } for the legacy look.",
    code: [
      'require("peachy").setup()              -- Peach (default)',
      'require("peachy").setup({ variant = "pink" })  -- Pink'
    ]
  },
  {
    title: "Oh My Posh",
    badge: "2 variants",
    detail: "Choose peach.omp.json or pink.omp.json for your preferred prompt style.",
    code: [
      'eval "$(oh-my-posh init zsh --config ~/.config/peach.omp.json)"',
      '# or: eval "$(oh-my-posh init zsh --config ~/.config/pink.omp.json)"'
    ]
  },
  {
    title: "WezTerm",
    badge: "2 variants",
    detail: "Copy peach.lua or pink.lua into your WezTerm config for matching terminal colors.",
    code: [
      'local peachy = dofile(os.getenv("HOME") .. "/.config/wezterm/peachy.lua")',
      'return { colors = peachy }'
    ]
  }
];

const portCards = [
  {
    title: "VS Code",
    badge: "Ready",
    detail: "Two variants (Pink + Peach) with manifest, icon, docs, and automated Marketplace publishing."
  },
  {
    title: "LazyVim",
    badge: "Ready",
    detail: "Two variants (Pink + Peach) with Treesitter, diagnostics, git signs, and UI highlights."
  },
  {
    title: "Oh My Posh",
    badge: "Ready",
    detail: "Two prompt configs (Pink + Peach) with session, path, git, Node.js segments."
  },
  {
    title: "WezTerm",
    badge: "Ready",
    detail: "Two terminal palettes (Pink + Peach) with ANSI colors, tab bar, and selection styling."
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
    detail: "Create a semver tag like `v0.2.0` once the package looks right."
  },
  {
    title: "Package",
    detail: "GitHub Actions builds the `.vsix` and release tarballs for the other ports."
  },
  {
    title: "Publish",
    detail: "The release workflow publishes the extension (both variants) to the VS Code Marketplace and creates a GitHub Release."
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
