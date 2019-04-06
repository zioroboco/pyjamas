import { configure } from "@storybook/react"

const loadStories = () => {
  const req = require.context("../packages/components", true, /\.stories\.tsx$/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
