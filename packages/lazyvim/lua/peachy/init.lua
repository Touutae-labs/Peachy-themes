local M = {}

--- Load a Peachy variant.
--- @param opts? { variant?: "peach"|"pink" }
function M.setup(opts)
  opts = opts or {}
  local variant = opts.variant or "peach"

  if variant == "pink" then
    require("peachy.pink").setup()
  else
    require("peachy.peach").setup()
  end
end

return M
