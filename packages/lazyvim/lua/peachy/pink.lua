local M = {}

function M.setup()
  local p = {
    bg = "#202330",
    panel = "#2d2f42",
    selection = "#472541",
    text = "#fff8f8",
    muted = "#9b9999",
    pink = "#FA508C",
    rose = "#fe7c8e",
    lavender = "#DCBFF2",
    golden = "#FFC85B",
    warmcream = "#FAE8B6",
    lime = "#9CD162",
    comment = "#6D7A72",
    error = "#ff62a5",
    success = "#58B896",
    warning = "#d0963a",
    blue = "#A2C2EB",
    purple = "#E6A1FF",
    variable = "#EBA4AC"
  }

  vim.cmd("highlight clear")
  if vim.fn.exists("syntax_on") then
    vim.cmd("syntax reset")
  end

  vim.g.colors_name = "peachy-pink"

  local set = vim.api.nvim_set_hl

  set(0, "Normal", { fg = p.text, bg = p.bg })
  set(0, "NormalNC", { fg = p.text, bg = p.bg })
  set(0, "NormalFloat", { fg = p.text, bg = p.panel })
  set(0, "FloatBorder", { fg = p.rose, bg = p.panel })
  set(0, "FloatTitle", { fg = p.lavender, bg = p.panel, bold = true })
  set(0, "WinSeparator", { fg = p.panel })
  set(0, "SignColumn", { bg = p.bg })
  set(0, "FoldColumn", { fg = p.muted, bg = p.bg })
  set(0, "Folded", { fg = p.muted, bg = p.panel })
  set(0, "CursorLine", { bg = p.selection })
  set(0, "CursorLineNr", { fg = p.pink, bold = true })
  set(0, "LineNr", { fg = p.muted })
  set(0, "ColorColumn", { bg = p.panel })
  set(0, "Comment", { fg = p.comment, italic = true })
  set(0, "String", { fg = p.warmcream })
  set(0, "Character", { fg = p.warmcream })
  set(0, "Number", { fg = p.pink })
  set(0, "Boolean", { fg = p.success })
  set(0, "Function", { fg = p.golden })
  set(0, "Identifier", { fg = p.variable })
  set(0, "Type", { fg = p.lavender, italic = true })
  set(0, "Keyword", { fg = p.pink })
  set(0, "Statement", { fg = p.pink })
  set(0, "Conditional", { fg = p.pink })
  set(0, "Repeat", { fg = p.pink })
  set(0, "Operator", { fg = p.lavender })
  set(0, "Constant", { fg = p.pink })
  set(0, "Special", { fg = p.rose })
  set(0, "Delimiter", { fg = p.lavender })
  set(0, "Tag", { fg = p.pink })
  set(0, "Visual", { bg = p.selection })
  set(0, "Search", { fg = p.bg, bg = p.golden })
  set(0, "IncSearch", { fg = p.bg, bg = p.pink })
  set(0, "CurSearch", { fg = p.bg, bg = p.pink, bold = true })
  set(0, "MatchParen", { fg = p.golden, bg = p.selection, bold = true })
  set(0, "Pmenu", { fg = p.text, bg = p.panel })
  set(0, "PmenuSel", { fg = p.text, bg = p.selection })
  set(0, "PmenuSbar", { bg = p.panel })
  set(0, "PmenuThumb", { bg = p.comment })
  set(0, "StatusLine", { fg = p.text, bg = p.panel })
  set(0, "StatusLineNC", { fg = p.muted, bg = p.panel })
  set(0, "TabLine", { fg = p.muted, bg = p.panel })
  set(0, "TabLineFill", { bg = p.bg })
  set(0, "TabLineSel", { fg = p.pink, bg = p.bg, bold = true })
  set(0, "Error", { fg = p.error, bg = p.bg, bold = true })
  set(0, "WarningMsg", { fg = p.warning })
  set(0, "DiagnosticError", { fg = p.error })
  set(0, "DiagnosticWarn", { fg = p.warning })
  set(0, "DiagnosticInfo", { fg = p.blue })
  set(0, "DiagnosticHint", { fg = p.success })
  set(0, "DiagnosticVirtualTextError", { fg = p.error, bg = p.panel })
  set(0, "DiagnosticVirtualTextWarn", { fg = p.warning, bg = p.panel })
  set(0, "DiagnosticVirtualTextInfo", { fg = p.blue, bg = p.panel })
  set(0, "DiagnosticVirtualTextHint", { fg = p.success, bg = p.panel })
  set(0, "GitSignsAdd", { fg = p.success })
  set(0, "GitSignsChange", { fg = p.golden })
  set(0, "GitSignsDelete", { fg = p.error })
  set(0, "DiffAdd", { fg = p.success, bg = p.panel })
  set(0, "DiffDelete", { fg = p.error, bg = p.panel })
  set(0, "@property", { fg = p.lavender })
  set(0, "@tag", { fg = p.pink })
  set(0, "@tag.attribute", { fg = p.purple })
  set(0, "@type", { fg = p.lavender, italic = true })
  set(0, "@type.builtin", { fg = p.lavender })
  set(0, "@function", { fg = p.golden })
  set(0, "@function.builtin", { fg = p.blue, bold = true })
  set(0, "@function.method", { fg = p.golden })
  set(0, "@variable.parameter", { fg = p.lime, italic = true })
  set(0, "@keyword", { fg = p.pink })
  set(0, "@keyword.function", { fg = p.pink })
  set(0, "@string", { fg = p.warmcream })
  set(0, "@number", { fg = p.pink })
end

return M
