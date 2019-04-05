import { storiesOf } from "@storybook/react"
import * as React from "react"
import { ExampleElement } from "./ExampleElement"

storiesOf("ExampleElement", module)
  .add("positive", () => (
    <ExampleElement colour="positive">{`+`}</ExampleElement>
  ))
  .add("negative", () => (
    <ExampleElement colour="negative">{`-`}</ExampleElement>
  ))
