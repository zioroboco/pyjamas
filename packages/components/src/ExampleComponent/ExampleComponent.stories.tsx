import { storiesOf } from "@storybook/react"
import * as React from "react"
import { ExampleComponent } from "./ExampleComponent"

storiesOf("ExampleComponent", module)
  .add("positive", () => (
    <ExampleComponent colour="positive">{`+`}</ExampleComponent>
  ))
  .add("negative", () => (
    <ExampleComponent colour="negative">{`-`}</ExampleComponent>
  ))
