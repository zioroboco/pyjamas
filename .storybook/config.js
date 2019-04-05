import { configure } from "@storybook/react"

const loadStories = () => {
  const req = require.context("../packages/elements", true, /\.stories\.tsx$/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
