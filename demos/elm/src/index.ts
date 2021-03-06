import { defineCustomElements } from "@pyjamas/primitives/dist/loader"

const root = document.createElement("div")
root.id = "root"
document.body.appendChild(root)

defineCustomElements(window)

const { Elm } = require("./Main.elm")

Elm.Main.init({ node: document.getElementById("root") })
