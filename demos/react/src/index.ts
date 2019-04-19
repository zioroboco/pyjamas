import * as React from "react"
import * as ReactDom from "react-dom"

import { defineCustomElements } from "@pyjamas/primitives/dist/loader"

const root = document.createElement("div")
root.id = "root"
document.body.appendChild(root)

defineCustomElements(window)

ReactDom.render(
  React.createElement("pjs-whiskers", { colour: "negative" }),
  root
)
