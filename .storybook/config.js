import { configure, addDecorator } from "@storybook/react"
import { jsxDecorator } from "storybook-addon-jsx"
import { withA11y } from "@storybook/addon-a11y"

addDecorator(jsxDecorator)
addDecorator(withA11y)

const loadStories = () => {
  const req = require.context("../packages/components", true, /\.stories\.tsx$/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
