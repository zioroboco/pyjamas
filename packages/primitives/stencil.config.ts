import { Config } from "@stencil/core"

export const config: Config = {
  namespace: "pjs",
  tsconfig: "tsconfig.json",
  outputTargets: [{ type: "dist" }]
}
