import { ExampleComponent } from "@pyjamas/components"
import * as backstitch from "backstitch"

backstitch.define("x-example", ExampleComponent)

const { Elm } = require("./Main.elm")

Elm.Main.init({ node: document.getElementById("root") })
